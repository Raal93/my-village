export interface BuildingResources {
  wood: number;
  clay: number;
  iron: number;
}

export interface BuildingLevelData {
  resources: BuildingResources;
  workers: number;
}

export interface BuildingData {
  [level: string]: BuildingLevelData;
}

export interface allBuldingData {
  [key: string]: BuildingData;
  tartak: BuildingData;
  cegielnia: BuildingData;
  hutaZelaza: BuildingData;
}

export interface QueueBuilding {
  building: string;
  level: number;
}

export interface BuildingResources {
  wood: number;
  clay: number;
  iron: number;
}

export interface VillageState {
  ratusz: number;
  tartak: number;
  cegielnia: number;
  hutaZelaza: number;
  zagroda: number;
  spichlerz: number;
}

export interface Time {
  waited: number;
  buildTime: number;
}

export interface QueueItem {
  building: string;
  level: number;
}

export interface ResourceStock {
  wood: number;
  clay: number;
  iron: number;
}

export interface ResourceProduction {
  wood: { level: number; production: number };
  clay: { level: number; production: number };
  iron: { level: number; production: number };
}

export interface SimulationItem {
  building: string;
  level: number;
  costs: BuildingResources;
  stock: BuildingResources;
  production: BuildingResources;
  timeWaited: number;
  missingResources: BuildingResources;
  generatedResourcesWhileWaiting: BuildingResources;
  newVillageState: VillageState;
  buildTime: number;
  stockOnStartBuilding: BuildingResources;
  stockOnFinishBuilding: BuildingResources;
  generatedDuringBuilding: BuildingResources;
  specialAdded: string;
  currStockCap: number;
  currWorkersCap: number;
  workersNeeded: number;
  employedWorkers: number;
  stockOver: BuildingResources;
}
