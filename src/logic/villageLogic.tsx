import { useEffect, useState } from 'react';
const HOUR_TO_SEC = 60 * 60;
interface ResourceStock {
  wood: number;
  clay: number;
  iron: number;
}
interface ResourceProduction {
  wood: number;
  clay: number;
  iron: number;
}

export const useResourceUpdater = (
  setStock: React.Dispatch<React.SetStateAction<ResourceStock>>,
  production: ResourceProduction,
) => {
  useEffect(() => {
    const updateStock = () => {
      setStock((prevStock) => ({
        wood: prevStock.wood + production.wood / HOUR_TO_SEC,
        clay: prevStock.clay + production.clay / HOUR_TO_SEC,
        iron: prevStock.iron + production.iron / HOUR_TO_SEC,
      }));
    };

    const intervalId = setInterval(updateStock, 1000); // Ustawienie interwału na 1 sekundę

    return () => {
      clearInterval(intervalId); // Wyczyszczenie interwału przy odmontowywaniu komponentu
    };
  }, [setStock, production]); // Zależności useEffect
};

export const manageResources = () => {
  const [stock, setStock] = useState<ResourceStock>({
    wood: 15,
    clay: 0,
    iron: 20,
  });

  const [production, setProduction] = useState<ResourceProduction>({
    wood: 6000,
    clay: 7500,
    iron: 40000,
  });

  return {
    stock,
    setStock,
    production,
    setProduction,
  };
};
