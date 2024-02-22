import { buildingCostData } from '../data/buildingCostData';
import { buildingSpecialData } from '../data/buildingSpecialData';
import { buildingTimeData } from '../data/buildingTimeData';
import {
  BuildingResources,
  QueueBuilding,
  SimulationItem,
  Time,
  VillageState,
} from '../models/models';

const InitialItem = {
  building: '',
  level: 0,
  costs: { wood: 0, clay: 0, iron: 0 },
  stock: { wood: 200, clay: 200, iron: 200 },
  production: { wood: 5, clay: 5, iron: 5 },
  timeWaited: 0,
  missingResources: { wood: 0, clay: 0, iron: 0 },
  generatedResourcesWhileWaiting: { wood: 0, clay: 0, iron: 0 },
  newVillageState: {
    ratusz: 1,
    tartak: 0,
    cegielnia: 0,
    hutaZelaza: 0,
    zagroda: 1,
    spichlerz: 1,
  },
  buildTime: 1,
  stockOnStartBuilding: { wood: 0, clay: 0, iron: 0 },
  stockOnFinishBuilding: { wood: 0, clay: 0, iron: 0 },
  generatedDuringBuilding: { wood: 0, clay: 0, iron: 0 },
  specialAdded: '',
  currStockCap: 1000,
  currWorkersCap: 240,
  workersNeeded: 1,
  employedWorkers: 5,
  stockOver: { wood: 0, clay: 0, iron: 0 },
};

const HOUR_TO_SECOND = 1 * 60 * 60;
const SECOND_TO_HOUR = 1 / (60 * 60);
let stock = { wood: 200, clay: 200, iron: 200 };
let production = { wood: 5, clay: 5, iron: 5 };
let villageState = {
  ratusz: 1,
  tartak: 0,
  cegielnia: 0,
  hutaZelaza: 0,
  zagroda: 1,
  spichlerz: 1,
};
let workersCap = 240;
let employedWorkers = 5;
let stockCap = 1000;
let ratuszTimeFactor = 0.95;
const simulationItem = { ...InitialItem };

const stockUpgradeSuggestion = (building: string, lvl: number) => {
  const { getBuildingCost } = buildingCostData();
  const costs = getBuildingCost(building, lvl);
  if (costs.wood * 2 > stockCap || costs.clay * 2 > stockCap || costs.iron * 2 > stockCap)
    console.log(
      `Zalecam rozbudowę spichlerza przed ${building} poziom ${lvl}. Koszty ||${costs.wood}|${costs.clay}|${costs.iron}|| Pojemność ${stockCap}`,
    );
};

const zagrodaUpgradeSuggestion = (building: string, lvl: number) => {
  if (employedWorkers * 1.1 > workersCap) {
    console.log(
      `Zalecam rozbudowę zagrody przed ${building} poziom ${lvl}. Zagroda: ${employedWorkers}/${workersCap}`,
    );
  }
};

const updateStock = (value: BuildingResources, operation: string): BuildingResources => {
  let newStock: BuildingResources;
  const over = { wood: 0, clay: 0, iron: 0 };

  if (operation === 'plus') {
    let wood, clay, iron;

    if (stock.wood + value.wood > stockCap) {
      wood = stockCap;
      over.wood = stock.wood + value.wood - stockCap;
      console.log(`Przepadło ${over.wood} drewna.`);
    } else wood = stock.wood + value.wood;

    if (stock.clay + value.clay > stockCap) {
      clay = stockCap;
      over.clay = stock.clay + value.clay - stockCap;
      console.log(`Przepadło ${over.clay} gliny.`);
    } else clay = stock.clay + value.clay;

    if (stock.iron + value.iron > stockCap) {
      iron = stockCap;
      over.iron = stock.iron + value.iron - stockCap;
      console.log(`Przepadło ${over.iron} żelaza`);
    } else iron = stock.iron + value.iron;

    newStock = { wood, clay, iron }; // chyba źle
  } else if (operation === 'minus') {
    newStock = {
      wood: stock.wood - value.wood,
      clay: stock.clay - value.clay,
      iron: stock.iron - value.iron,
    };
  } else {
    throw new Error('Nieprawidłowa operacja: ' + operation);
  }
  stock = newStock;
  return over;
};

const hasEnoughResources = (costs: BuildingResources): boolean => {
  return stock.wood >= costs.wood && stock.clay >= costs.clay && stock.iron >= costs.iron;
};

const hasEnoughWorkers = (building: string, level: number): boolean => {
  const { getWorkersNeeded } = buildingCostData();
  const neededWorkers = getWorkersNeeded(building, level);
  return neededWorkers <= workersCap - employedWorkers;
};

const calcMissingResources = (
  currentStock: BuildingResources,
  costs: BuildingResources,
): BuildingResources => {
  simulationItem.missingResources = {
    wood: Math.max(costs.wood - currentStock.wood, 0),
    clay: Math.max(costs.clay - currentStock.clay, 0),
    iron: Math.max(costs.iron - currentStock.iron, 0),
  };
  return { ...simulationItem.missingResources };
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

const updateVillageState = (buildingType: string, level: number): VillageState => {
  villageState = { ...villageState, [buildingType]: level };
  return villageState;
};

const setSpecialFunctions = (building: string, level: number): string => {
  const {
    getWorkersCapacity,
    getStockCapByLvl,
    getRatuszTimeFactorByLvl,
    getProduction,
  } = buildingSpecialData();

  if (building === 'ratusz') {
    ratuszTimeFactor = getRatuszTimeFactorByLvl(level);
    return `Ustwiono nowy współczynnik czasowy na ${ratuszTimeFactor}%.`;
  }
  if (building === 'zagroda') {
    workersCap = getWorkersCapacity(level);
    return `Ustawiono nową pojemność zagrody na ${workersCap} miejsc.`;
  }
  if (building === 'spichlerz') {
    stockCap = getStockCapByLvl(level);
    return `Ustawiono nową pojemność spichlerza na ${stockCap} miejsc`;
  }
  if (building === 'tartak') {
    production.wood = getProduction(level);
    return `Ustawiono nową produkcję w tartaku: ${production.wood} na godzinę.`;
  }
  if (building === 'cegielnia') {
    production.clay = getProduction(level);
    return `Ustawiono nową produkcję w cegielni: ${production.clay} na godzinę.`;
  }
  if (building === 'hutaZelaza') {
    production.iron = getProduction(level);
    return `Ustawiono nową produkcję w hucie żelaza: ${production.iron} na godzinę.`;
  }

  return `Nie znaleziono budynku ${building} level ${level}`;
};

const hasEnoughStockCap = (buildingCost: BuildingResources): boolean => {
  return (
    stockCap >= buildingCost.wood &&
    stockCap >= buildingCost.clay &&
    stockCap >= buildingCost.iron
  );
};

const resetSimulationLoopDetails = () => {
  stock = { wood: 200, clay: 200, iron: 200 };
  production = { wood: 5, clay: 5, iron: 5 };
  villageState = {
    ratusz: 1,
    tartak: 0,
    cegielnia: 0,
    hutaZelaza: 0,
    zagroda: 1,
    spichlerz: 1,
  };
  workersCap = 240;
  employedWorkers = 5;
  stockCap = 1000;
  ratuszTimeFactor = 0.95;
};

export const simulationLoop = (queue: QueueBuilding[]) => {
  resetSimulationLoopDetails();
  const { getBuildingCost, getWorkersNeeded } = buildingCostData();
  const { getBuildTime } = buildingTimeData();
  const simulationLoopDetails: SimulationItem[] = [];

  for (const queueItem of queue) {
    const level = queueItem.level;
    const building = queueItem.building;

    // DZIAŁANIA
    stockUpgradeSuggestion(building, level);
    zagrodaUpgradeSuggestion(building, level);
    const workersNeeded = getWorkersNeeded(building, level); // ustal ilosc potrzebnych pracowników
    const cost = getBuildingCost(building, level); // ustal koszty
    const buildTime = Math.round(getBuildTime(building, level) * ratuszTimeFactor); // ustal czas budowy

    if (hasEnoughWorkers(building, level)) {
      employedWorkers = employedWorkers + workersNeeded;
    } else {
      throw console.error(
        `Nie można wybudować ${building} level ${level}, ponieważ nie ma wystarczająco miejsca w zagrodzie. Wolnych pracowników: ${
          workersCap - employedWorkers
        }. Potrzebnych pracowników: ${workersNeeded}`,
      );
    }

    if (!hasEnoughStockCap(cost))
      throw console.error(
        `Nie można wybudować ${building} level ${level}, ponieważ spichlerz jest za mały.`,
      );

    if (!hasEnoughResources(cost)) {
      const missingResources = calcMissingResources(stock, cost);
      const timeWaited = calcWaitingTime(missingResources, production);
      const generatedResources = calcGeneratedResources(timeWaited, production);
      updateStock(generatedResources, 'plus');

      simulationItem.timeWaited = timeWaited;
      simulationItem.generatedResourcesWhileWaiting = generatedResources;
    } else {
      simulationItem.timeWaited = 0;
    }

    simulationItem.stock = { ...stock };
    updateStock(cost, 'minus');
    simulationItem.stockOnStartBuilding = stock;
    const generatedDuringBuilding = calcGeneratedResources(buildTime, production); //ile surki wygenerowało podczas budowy
    const overproduction = updateStock(generatedDuringBuilding, 'plus'); // dodaj i zapisz nadmiar jeśli wystąpił
    simulationItem.stockOnFinishBuilding = stock;
    updateVillageState(building, level);
    const specialFn = setSpecialFunctions(building, level);

    // OPISYWANIE
    simulationItem.currStockCap = stockCap;
    simulationItem.building = building;
    simulationItem.level = level;
    simulationItem.costs = { ...cost };
    simulationItem.production = { ...production };
    simulationItem.currWorkersCap = workersCap;
    simulationItem.workersNeeded = workersNeeded;
    simulationItem.employedWorkers = employedWorkers;
    simulationItem.buildTime = buildTime;
    simulationItem.stockOver = { ...overproduction };
    simulationItem.generatedDuringBuilding = { ...generatedDuringBuilding };
    simulationItem.newVillageState = { ...villageState };
    simulationItem.specialAdded = specialFn;

    simulationLoopDetails.push(simulationItem);
  }
  return simulationLoopDetails;
};

export const getTime = (simulationLog: SimulationItem[]): Time => {
  const waited = simulationLog.reduce((acc, currObj) => (acc += currObj.timeWaited), 0);
  const built = simulationLog.reduce((acc, currObj) => (acc += currObj.buildTime), 0);

  return { waited: waited, buildTime: built };
};
