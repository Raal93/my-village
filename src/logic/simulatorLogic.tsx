import { buildingsData, buildingsTimeData } from './simulatorData';
interface QueueBuilding {
  building: 'tartak' | 'cegielnia' | 'hutaZelaza';
  level: number;
}

interface BuildingResources {
  wood: number;
  clay: number;
  iron: number;
}

interface Queue {
  [key: string]: QueueBuilding;
}

interface VillageState {
  tartak: number;
  cegielnia: number;
  hutaZelaza: number;
}

interface Time {
  waited: number;
  buildTime: number;
}

const ecoBuildingsList = ['tartak', 'cegielnia', 'hutaZelaza'];
const HOUR_TO_SECOND = 1 * 60 * 60;
const SECOND_TO_HOUR = 1 / (60 * 60);
let resourcesStock = { wood: 200, clay: 200, iron: 200 };
let productionStock = { wood: 5, clay: 5, iron: 5 };
let villageState = { tartak: 0, cegielnia: 0, hutaZelaza: 0 };

const getResourcesStock = (): BuildingResources => resourcesStock;

const setResourcesStock = (newStock: BuildingResources) => (resourcesStock = newStock);

const getProductionStock = (): BuildingResources => productionStock;

const setProductionStock = (newProduction: BuildingResources) =>
  (productionStock = newProduction);

const getVillageState = (): VillageState => villageState;

const setVillageState = (newVillageState: VillageState) =>
  (villageState = newVillageState);

const updateProductionStock = (
  buildingType: string,
  buildingLevel: number,
): BuildingResources => {
  const { getProduction } = buildingsData(); // zainicjuj zewnętrzną funkcję
  const newProductionByType = getProduction(buildingType, buildingLevel); // pobierz produkcję dla aktualnego budynku
  const resourceType = getResourceType(buildingType); // znajdź typ surowca po nazwie budynku
  const newProductionStock = { ...productionStock, [resourceType]: newProductionByType }; // wrzuć produkcję aktualnego do całej produkcji
  setProductionStock(newProductionStock); // ustaw nową produkcję
  return newProductionStock; // zwróć nową produkcję
};

const updateResourcesStock = (
  value: BuildingResources,
  operation: string,
): BuildingResources => {
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
  return newStock;
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

const updateVillageState = (buildingType: string, level: number): VillageState => {
  const villageState = getVillageState();
  const newVillageState = { ...villageState, [buildingType]: level };

  setVillageState(newVillageState);
  return newVillageState;
};

interface IterationData {
  building: string;
  level: number;
  costs: BuildingResources;
  stock: BuildingResources;
  production: BuildingResources;
  timeWaited: number;
  missingResources: BuildingResources;
  generatedResources: BuildingResources;
  newProduction: BuildingResources;
  newVillageState: VillageState;
  buildTime: number;
  stockAfterStartBuilding: BuildingResources;
  generatedDuringBuilding: BuildingResources;
}

export const simulate = (queue: Queue) => {
  const { getBuildingCosts } = buildingsData();
  const { getBuildTime } = buildingsTimeData();
  const simulationLogs: IterationData[] = [];

  for (const key in queue) {
    const iterationData: IterationData = {
      building: '',
      level: 0,
      costs: { wood: 0, clay: 0, iron: 0 },
      stock: { wood: 0, clay: 0, iron: 0 },
      production: { wood: 5, clay: 5, iron: 5 },
      timeWaited: 0,
      missingResources: { wood: 0, clay: 0, iron: 0 },
      generatedResources: { wood: 0, clay: 0, iron: 0 },
      newProduction: { wood: 5, clay: 5, iron: 5 },
      newVillageState: { tartak: 0, cegielnia: 0, hutaZelaza: 0 },
      buildTime: 1,
      stockAfterStartBuilding: { wood: 0, clay: 0, iron: 0 },
      generatedDuringBuilding: { wood: 0, clay: 0, iron: 0 },
    };
    const buildingLevel = queue[key].level; // ustal lvl budynku
    const buildingType = queue[key].building; // ustal typ budynku
    const buildingCost = getBuildingCosts(buildingType, buildingLevel); // ustal koszty bieżącego budynku
    const production = getProductionStock(); // ustal aktualną produkcję wioski
    const currentStock = getResourcesStock(); // ustal aktualny stan spichlerza

    iterationData.building = buildingType;
    iterationData.level = buildingLevel;
    iterationData.costs = buildingCost;
    iterationData.stock = currentStock;
    iterationData.production = production;

    if (!hasEnoughResources(buildingCost)) {
      const missingResources = calcMissingResources(currentStock, buildingCost);
      const timeWaited = calcWaitingTime(missingResources, production);
      const generatedResources = calcGeneratedResources(timeWaited, production);
      updateResourcesStock(generatedResources, 'plus');

      iterationData.missingResources = missingResources;
      iterationData.timeWaited = timeWaited;
      iterationData.generatedResources = generatedResources;
    } else {
      iterationData.timeWaited = 0;
    }

    // proces budowania
    const buildTime = getBuildTime(buildingType, buildingLevel); // sprawdz ile czasu bedzie sie budowac
    iterationData.buildTime = buildTime;
    iterationData.stockAfterStartBuilding = updateResourcesStock(buildingCost, 'minus'); // odejmij surowce ze spichlerza
    // odejmij miejsce z zagrody

    const generatedDuringBuilding = calcGeneratedResources(buildTime, production); // zasymuluj oczekiwanie: dodaj surowce które się wytworza w czasie oczekiwania
    updateResourcesStock(generatedDuringBuilding, 'plus');
    iterationData.generatedDuringBuilding = generatedDuringBuilding;

    iterationData.newVillageState = updateVillageState(buildingType, buildingLevel); // update stanu wioski i zapisanie

    if (ecoBuildingsList.includes(buildingType))
      iterationData.newProduction = updateProductionStock(buildingType, buildingLevel); // modyfikacja produkcji jesli wpływa i zapisanie

    simulationLogs.push(iterationData);
  }
  return simulationLogs;
};

export const getTime = (simulationLog: IterationData[]): Time => {
  const waited = simulationLog.reduce((acc, currObj) => (acc += currObj.timeWaited), 0);
  const built = simulationLog.reduce((acc, currObj) => (acc += currObj.buildTime), 0);

  return { waited: waited, buildTime: built };
};
