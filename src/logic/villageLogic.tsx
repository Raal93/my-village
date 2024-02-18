import { useEffect, useState } from 'react';

import { productionData } from '../data/vilageData';
import { ResourceProduction, ResourceStock } from '../models/models';

const HOUR_TO_SEC = 60 * 60;
const WORLD_SPEED = 1.6;

export const stockUpdater = (
  setStock: React.Dispatch<React.SetStateAction<ResourceStock>>,
  resourceBuilding: ResourceProduction,
) => {
  useEffect(() => {
    const updateStock = () => {
      setStock((prevStock) => ({
        wood: prevStock.wood + resourceBuilding.wood.production / HOUR_TO_SEC,
        clay: prevStock.clay + resourceBuilding.clay.production / HOUR_TO_SEC,
        iron: prevStock.iron + resourceBuilding.iron.production / HOUR_TO_SEC,
      }));
    };

    const intervalId = setInterval(updateStock, 1000); // Ustawienie interwału na 1 sekundę

    return () => {
      clearInterval(intervalId); // Wyczyszczenie interwału przy odmontowywaniu komponentu
    };
  }, [setStock, resourceBuilding]); // Zależności useEffect
};

export const manageResources = () => {
  const [stock, setStock] = useState<ResourceStock>({
    wood: 15,
    clay: 25,
    iron: 20,
  });

  const [resourceBuilding, setResourceBuilding] = useState<ResourceProduction>({
    wood: { level: 0, production: 5 },
    clay: { level: 0, production: 5 },
    iron: { level: 0, production: 5 },
  });

  const upgradeBuilding = (resourceType: keyof ResourceProduction) => {
    const { getProductionOnLvl } = productionData();
    setResourceBuilding((prevBuilding) => {
      if (prevBuilding[resourceType].level === 30) return prevBuilding;
      return {
        ...prevBuilding,
        [resourceType]: {
          level: prevBuilding[resourceType].level + 1,
          production:
            getProductionOnLvl(prevBuilding[resourceType].level + 1) * WORLD_SPEED,
        },
      };
    });
  };

  return {
    stock,
    setStock,
    resourceBuilding,
    setResourceBuilding,
    upgradeBuilding,
  };
};
