export interface BuildingResources {
  wood: number;
  clay: number;
  iron: number;
}

export interface BuildingLevelData {
  resources: BuildingResources;
  workers: number;
  production: number;
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
