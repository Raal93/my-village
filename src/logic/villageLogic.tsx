import { useEffect, useState } from 'react';

import { productionByLevel } from './vilageData';

const HOUR_TO_SEC = 60 * 60;
const WORLD_SPEED = 1.6;
interface ResourceStock {
  wood: number;
  clay: number;
  iron: number;
}
interface ResourceProduction {
  wood: { level: number; production: number };
  clay: { level: number; production: number };
  iron: { level: number; production: number };
}

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
    setResourceBuilding((prevBuilding) => {
      if (prevBuilding[resourceType].level === 30) return prevBuilding;
      return {
        ...prevBuilding,
        [resourceType]: {
          level: prevBuilding[resourceType].level + 1,
          production: productionByLevel[prevBuilding[resourceType].level] * WORLD_SPEED,
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
