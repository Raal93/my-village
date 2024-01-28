import { buildingsData } from './simulatorData';
interface QueueItem {
  building: 'tartak' | 'cegielnia' | 'hutaZelaza';
  level: number;
}

interface BuildingResources {
  wood: number;
  clay: number;
  iron: number;
}

interface Queue {
  [key: string]: QueueItem;
}

const HOUR_TO_SECOND = 1 * 60 * 60;
const SECOND_TO_HOUR = 1 / (60 * 60);
let resourcesStock = { wood: 200, clay: 200, iron: 200 };
let productionStock = { wood: 5, clay: 5, iron: 5 };

const getResourcesStock = (): BuildingResources => {
  return {
    wood: resourcesStock.wood,
    clay: resourcesStock.clay,
    iron: resourcesStock.iron,
  };
};

const setResourcesStock = (newStock: BuildingResources) => {
  resourcesStock = newStock;
};

const getProductionStock = (): BuildingResources => {
  return {
    wood: productionStock.wood,
    clay: productionStock.clay,
    iron: productionStock.iron,
  };
};

const setProductionStock = (newProduction: BuildingResources) => {
  productionStock = newProduction;
};

const updateProductionStock = (
  buildingType: string,
  newProduction: number,
): BuildingResources => {
  const resourceType = getResourceType(buildingType);
  const newProductionAllResources = { ...productionStock, [resourceType]: newProduction };
  setProductionStock(newProductionAllResources);
  return newProductionAllResources;
};

const updateResourcesStock = (value: BuildingResources, operation: string) => {
  let newStock: BuildingResources;
  if (operation === 'plus') {
    newStock = {
      wood: resourcesStock.wood + value.wood,
      clay: resourcesStock.clay + value.clay,
      iron: resourcesStock.iron + value.iron,
    };
  } else if (operation === 'minus') {
    newStock = {
      wood: resourcesStock.wood - value.wood,
      clay: resourcesStock.clay - value.clay,
      iron: resourcesStock.iron - value.iron,
    };
  } else {
    throw new Error('Nieprawidłowa operacja: ' + operation);
  }
  setResourcesStock(newStock);
};

const hasEnoughResources = (costs: BuildingResources): boolean => {
  return (
    resourcesStock.wood >= costs.wood &&
    resourcesStock.clay >= costs.clay &&
    resourcesStock.iron >= costs.iron
  );
};

const calcMissingResources = (
  currentStock: BuildingResources,
  costs: BuildingResources,
): BuildingResources => {
  return {
    wood: Math.max(costs.wood - currentStock.wood, 0),
    clay: Math.max(costs.clay - currentStock.clay, 0),
    iron: Math.max(costs.iron - currentStock.iron, 0),
  };
};

const calcWaitingTime = (
  missingResources: BuildingResources,
  production: BuildingResources,
): number => {
  const longestTimeHours = Math.max(
    missingResources.wood / production.wood,
    missingResources.clay / production.clay,
    missingResources.iron / production.iron,
  );
  return Math.round(longestTimeHours * HOUR_TO_SECOND);
};

const calcGeneratedResources = (
  time: number,
  production: BuildingResources,
): BuildingResources => {
  return {
    wood: Math.round(time * SECOND_TO_HOUR * production.wood),
    clay: Math.round(time * SECOND_TO_HOUR * production.clay),
    iron: Math.round(time * SECOND_TO_HOUR * production.iron),
  };
};

const getResourceType = (buildingType: string): string => {
  if (buildingType === 'tartak') return 'wood';
  else if (buildingType === 'cegielnia') return 'clay';
  else if (buildingType === 'hutaZelaza') return 'iron';
  else throw new Error(`Nieznany typ budynku: ${buildingType}`);
};

interface iterationData {
  building: string;
  level: number;
  costs: BuildingResources;
  stock: BuildingResources;
  production: BuildingResources;
  timeWaitedForResources: number;
  missingResources: BuildingResources;
  generatedResources: BuildingResources;
  newProduction: BuildingResources;
}

export const simulate = (queue: Queue) => {
  const { getBuildingCosts, getProduction } = buildingsData();
  const simulationLogs: iterationData[] = [];

  for (const key in queue) {
    const iterationData: iterationData = {
      building: '',
      level: 0,
      costs: { wood: 0, clay: 0, iron: 0 },
      stock: { wood: 0, clay: 0, iron: 0 },
      production: { wood: 5, clay: 5, iron: 5 },
      timeWaitedForResources: 0,
      missingResources: { wood: 0, clay: 0, iron: 0 },
      generatedResources: { wood: 0, clay: 0, iron: 0 },
      newProduction: { wood: 5, clay: 5, iron: 5 },
    };
    const buildingLevel = queue[key].level; // ustal lvl budynku
    const buildingType = queue[key].building; // ustal typ budynku
    const buildingCost = getBuildingCosts(buildingType, buildingLevel); // ustal koszty bieżącego budynku
    const currentProduction = getProductionStock(); // ustal aktualną produkcję wioski
    const currentStock = getResourcesStock(); // ustal aktualny stan spichlerza

    iterationData.building = buildingType;
    iterationData.level = buildingLevel;
    iterationData.costs = buildingCost;
    iterationData.stock = currentStock;
    iterationData.production = currentProduction;

    if (!hasEnoughResources(buildingCost)) {
      const missingResources = calcMissingResources(currentStock, buildingCost);
      const timeWaitedForResources = calcWaitingTime(missingResources, currentProduction);
      const generatedResources = calcGeneratedResources(
        timeWaitedForResources,
        currentProduction,
      );
      updateResourcesStock(generatedResources, 'plus');

      iterationData.missingResources = missingResources;
      iterationData.timeWaitedForResources = timeWaitedForResources;
      iterationData.generatedResources = generatedResources;
    } else {
      iterationData.timeWaitedForResources = 0;
    }

    // proces budowania

    // sprawdz ile czasu bedzie sie budowac
    updateResourcesStock(buildingCost, 'minus'); // odejmij surowce ze spichlerza
    // odejmij miejsce z zagrody
    // zasymuluj oczekiwanie: dodaj surowce które się wytworza w czasie oczekiwania
    // podnieś poziom budynku
    // zmodyfikuj produkcje jesli wpływa
    if (
      buildingType === 'tartak' ||
      buildingType === 'cegielnia' ||
      buildingType === 'hutaZelaza'
    ) {
      const newProductionOneType = getProduction(buildingType, buildingLevel);
      const newProductionAllTypes = updateProductionStock(
        buildingType,
        newProductionOneType,
      );
      iterationData.newProduction = newProductionAllTypes;
    }

    simulationLogs.push(iterationData);
  }
  return simulationLogs;
};
