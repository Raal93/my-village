import { buildingTimeData } from '../data/buildingTimeData';
import { buildingParams } from '../data/simulatorData';
import { specialFunctionsData } from '../data/specialFunctionsData';
import { BuildingResources, QueueBuilding, Time, VillageState } from '../models/models';

const ecoBuildingsList = ['tartak', 'cegielnia', 'hutaZelaza'];
const HOUR_TO_SECOND = 1 * 60 * 60;
const SECOND_TO_HOUR = 1 / (60 * 60);
let resourcesStock = { wood: 200, clay: 200, iron: 200 };
let productionStock = { wood: 5, clay: 5, iron: 5 };
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

const getResourcesStock = (): BuildingResources => resourcesStock;
const setResourcesStock = (newStock: BuildingResources) => (resourcesStock = newStock);
const getProductionStock = (): BuildingResources => productionStock;
const setProductionStock = (newProduction: BuildingResources) =>
  (productionStock = newProduction);
const getVillageState = (): VillageState => villageState;
const setVillageState = (newVillageState: VillageState) =>
  (villageState = newVillageState);
const getWorkersCap = (): number => workersCap;
const setWorkersCap = (newWorkersCap: number) => (workersCap = newWorkersCap);
const getStockCap = (): number => stockCap;
const setStockCap = (newStockCap: number) => (stockCap = newStockCap);
const getEmployedWorkers = (): number => employedWorkers;
const setEmployedWorkers = (newEmpoyedWorkers: number) =>
  (employedWorkers = newEmpoyedWorkers);
const getRatuszTimeFactor = (): number => ratuszTimeFactor;
const setRatuszTimeFactor = (newRatuszTimeFactor: number) =>
  (ratuszTimeFactor = newRatuszTimeFactor);

const updateProductionStock = (
  buildingType: string,
  buildingLevel: number,
): BuildingResources => {
  const { getProductionOnLvl } = specialFunctionsData();
  const newProductionByType = getProductionOnLvl(buildingLevel); // pobierz produkcję dla aktualnego budynku
  const resourceType = getResourceType(buildingType); // znajdź typ surowca po nazwie budynku
  const newProductionStock = { ...productionStock, [resourceType]: newProductionByType }; // wrzuć produkcję aktualnego do całej produkcji
  setProductionStock(newProductionStock); // ustaw nową produkcję
  return newProductionStock; // zwróć nową produkcję
};

const stockUpgradeSuggestion = (
  costs: BuildingResources,
  building: string,
  lvl: number,
) => {
  const stockCap = getStockCap();

  if (costs.wood * 2 > stockCap || costs.clay * 2 > stockCap || costs.iron * 2 > stockCap)
    console.log(
      `Zalecam rozbudowę spichlerza przed ${building} poziom ${lvl}. Koszty ||${costs.wood}|${costs.clay}|${costs.iron}|| Pojemność ${stockCap}`,
    );
};

const workersUpgrSugg = (building: string, lvl: number) => {
  if (getEmployedWorkers() * 1.1 > getWorkersCap()) {
    console.log(
      `Zalecam rozbudowę zagrody przed ${building} poziom ${lvl}. Zagroda: ${employedWorkers}/${workersCap}`,
    );
  }
};

const updateResourcesStock = (
  value: BuildingResources,
  operation: string,
): BuildingResources => {
  const stockCap = getStockCap();
  const stock = getResourcesStock();
  let newStock: BuildingResources;
  const over = { wood: 0, clay: 0, iron: 0 };

  if (operation === 'plus') {
    let wood, clay, iron;

    if (stock.wood + value.wood > stockCap) {
      wood = stockCap;
      over.wood = stock.wood + value.wood - stockCap;
    } else wood = stock.wood + value.wood;

    if (stock.clay + value.clay > stockCap) {
      clay = stockCap;
      over.clay = stock.clay + value.clay - stockCap;
    } else clay = stock.clay + value.clay;

    if (stock.iron + value.iron > stockCap) {
      iron = stockCap;
      over.iron = stock.iron + value.iron - stockCap;
    } else iron = stock.iron + value.iron;

    newStock = { wood, clay, iron };
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
  return over; // todo 4 dodac sprawdzanie czy jest wystarczajaco miejsca w spichrzu, todo 5 komunikat ile surki przepadło
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

const setSpecialFunctions = (buildingType: string, buildingLeveL: number): string => {
  const { getWorkersCapByLvl, getStockCapByLvl, getRatuszTimeFactorByLvl } =
    specialFunctionsData();
  let msg = '';

  if (buildingType === 'ratusz') {
    const newTimeFactor = getRatuszTimeFactorByLvl(buildingLeveL);
    setRatuszTimeFactor(newTimeFactor);
    msg = `Ustwiono nowy współczynnik czasowy na ${newTimeFactor}%.`;
  }
  if (buildingType === 'zagroda') {
    const newCap = getWorkersCapByLvl(buildingLeveL);
    setWorkersCap(newCap);
    msg = `Ustawiono nową pojemność zagrody na ${newCap} miejsc.`;
  }
  if (buildingType === 'spichlerz') {
    const newCap = getStockCapByLvl(buildingLeveL);
    setStockCap(newCap);
    msg = `Ustawiono nową pojemność spichlerza na ${newCap} miejsc`;
  }

  return msg;
};

const hasEnoughStockCap = (buildingCost: BuildingResources): boolean => {
  const stockCap = getStockCap();
  return (
    stockCap >= buildingCost.wood &&
    stockCap >= buildingCost.clay &&
    stockCap >= buildingCost.iron
  );
};

const addBuildingResources = (
  ressA: BuildingResources,
  ressB: BuildingResources,
): BuildingResources => {
  return {
    wood: ressA.wood + ressB.wood,
    clay: ressA.clay + ressB.clay,
    iron: ressA.iron + ressB.iron,
  };
};

const resetAllData = () => {
  setResourcesStock({ wood: 200, clay: 200, iron: 200 });
  setProductionStock({ wood: 5, clay: 5, iron: 5 });
  setVillageState({
    ratusz: 1,
    tartak: 0,
    cegielnia: 0,
    hutaZelaza: 0,
    zagroda: 1,
    spichlerz: 1,
  });
  setWorkersCap(240);
  setEmployedWorkers(5);
  setStockCap(1000);
  setRatuszTimeFactor(0.95);
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
  stockAfterFinishBuilding: BuildingResources;
  generatedDuringBuilding: BuildingResources;
  specialAdded: string;
  currStockCap: number;
  currWorkersCap: number;
  workersNeeded: number;
  employedWorkers: number;
  stockOver: BuildingResources;
}

export const simulate = (queue: QueueBuilding[]) => {
  resetAllData();
  const { getBuildingCosts, getWorkersNeeded } = buildingParams();
  const { getBuildTime } = buildingTimeData();
  const simulationLogs: IterationData[] = [];

  for (const queueItem of queue) {
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
      newVillageState: {
        ratusz: 1,
        tartak: 0,
        cegielnia: 0,
        hutaZelaza: 0,
        zagroda: 1,
        spichlerz: 1,
      },
      buildTime: 1,
      stockAfterStartBuilding: { wood: 0, clay: 0, iron: 0 },
      stockAfterFinishBuilding: { wood: 0, clay: 0, iron: 0 },
      generatedDuringBuilding: { wood: 0, clay: 0, iron: 0 },
      specialAdded: '',
      currStockCap: 1000,
      currWorkersCap: 240,
      workersNeeded: 1,
      employedWorkers: 5,
      stockOver: { wood: 0, clay: 0, iron: 0 },
    };
    const buildingLevel = queueItem.level; // ustal lvl budynku
    const buildingType = queueItem.building; // ustal typ budynku
    const buildingCost = getBuildingCosts(buildingType, buildingLevel); // ustal koszty bieżącego budynku
    stockUpgradeSuggestion(buildingCost, buildingType, buildingLevel);
    const production = getProductionStock(); // ustal aktualną produkcję wioski
    const currentStock = getResourcesStock(); // ustal aktualny stan spichlerza
    iterationData.currStockCap = getStockCap(); // ustal max pojemnosc spichlerza
    const employedWorkers = getEmployedWorkers();
    const freeWorkers = getWorkersCap() - employedWorkers; // ustal ilosc wolnego miejsca w zagrodzie
    const workersNeeded = getWorkersNeeded(buildingType, buildingLevel); // ustal ilosc potrzebnych pracowników
    workersUpgrSugg(buildingType, buildingLevel);

    iterationData.building = buildingType;
    iterationData.level = buildingLevel;
    iterationData.costs = buildingCost;
    iterationData.stock = currentStock;
    iterationData.production = production;

    if (!(freeWorkers >= workersNeeded)) {
      throw console.error(
        `Nie można wybudować ${buildingType} level ${buildingLevel}, ponieważ nie ma wystarczająco miejsca w zagrodzie. Wolnych pracowników: ${freeWorkers}. Potrzebnych pracowników: ${workersNeeded}`,
      );
    } else {
      iterationData.currWorkersCap = getWorkersCap();
      iterationData.workersNeeded = workersNeeded;
      iterationData.employedWorkers = setEmployedWorkers(employedWorkers + workersNeeded);
    }

    if (!hasEnoughStockCap(buildingCost))
      throw console.error(
        `Nie można wybudować ${buildingType} level ${buildingLevel}, ponieważ spichlerz jest za mały.`,
      );

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
    const ratuszTimeFactor = getRatuszTimeFactor();
    const tmp = getBuildTime(buildingType, buildingLevel);
    const tmp2 = tmp * ratuszTimeFactor;
    const buildTime = Math.round(tmp2);
    iterationData.buildTime = buildTime;

    updateResourcesStock(buildingCost, 'minus'); // odejmij surowce ze spichlerza
    iterationData.stockAfterStartBuilding = getResourcesStock();

    const generatedDuringBuilding = calcGeneratedResources(buildTime, production); // zasymuluj oczekiwanie: dodaj surowce które się wytworza w czasie oczekiwania

    const currOver = updateResourcesStock(generatedDuringBuilding, 'plus');
    iterationData.stockOver = addBuildingResources(iterationData.stockOver, currOver);
    iterationData.stockAfterFinishBuilding = getResourcesStock();
    iterationData.generatedDuringBuilding = generatedDuringBuilding;

    iterationData.newVillageState = updateVillageState(buildingType, buildingLevel); // update stanu wioski i zapisanie

    if (ecoBuildingsList.includes(buildingType))
      iterationData.newProduction = updateProductionStock(buildingType, buildingLevel); // modyfikacja produkcji jesli wpływa i zapisanie

    iterationData.specialAdded = setSpecialFunctions(buildingType, buildingLevel); // ustawienie nowej pojemnosci zagrody (pozniej itp)

    simulationLogs.push(iterationData);
  }
  return simulationLogs;
};

export const getTime = (simulationLog: IterationData[]): Time => {
  const waited = simulationLog.reduce((acc, currObj) => (acc += currObj.timeWaited), 0);
  const built = simulationLog.reduce((acc, currObj) => (acc += currObj.buildTime), 0);

  return { waited: waited, buildTime: built };
};
