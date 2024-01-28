export const buildingsData = () => {
  interface BuildingResources {
    wood: number;
    clay: number;
    iron: number;
  }

  interface BuildingLevelData {
    resources: BuildingResources;
    workers: number;
    production: number;
  }

  interface BuildingData {
    [level: string]: BuildingLevelData;
  }

  interface allBuldingData {
    [key: string]: BuildingData;
    tartak: BuildingData;
    cegielnia: BuildingData;
    hutaZelaza: BuildingData;
  }

  const allBuildingData = (): allBuldingData => ({
    tartak: {
      1: { resources: { wood: 50, clay: 60, iron: 40 }, workers: 5, production: 48 },
      2: { resources: { wood: 63, clay: 77, iron: 50 }, workers: 6, production: 56 },
      3: { resources: { wood: 78, clay: 98, iron: 63 }, workers: 7, production: 65 },
      4: { resources: { wood: 98, clay: 124, iron: 77 }, workers: 8, production: 76 },
      5: { resources: { wood: 122, clay: 159, iron: 96 }, workers: 9, production: 88 },
      6: { resources: { wood: 153, clay: 202, iron: 120 }, workers: 10, production: 102 },
      7: { resources: { wood: 191, clay: 258, iron: 149 }, workers: 12, production: 119 },
      8: { resources: { wood: 238, clay: 329, iron: 185 }, workers: 14, production: 138 },
      9: { resources: { wood: 298, clay: 419, iron: 231 }, workers: 16, production: 161 },
      10: {
        resources: { wood: 373, clay: 534, iron: 287 },
        workers: 18,
        production: 187,
      },
      11: {
        resources: { wood: 466, clay: 681, iron: 358 },
        workers: 21,
        production: 218,
      },
      12: {
        resources: { wood: 582, clay: 868, iron: 446 },
        workers: 24,
        production: 253,
      },
      13: {
        resources: { wood: 728, clay: 1107, iron: 555 },
        workers: 28,
        production: 294,
      },
      14: {
        resources: { wood: 909, clay: 1412, iron: 691 },
        workers: 33,
        production: 342,
      },
      15: {
        resources: { wood: 1137, clay: 1800, iron: 860 },
        workers: 38,
        production: 398,
      },
      16: {
        resources: { wood: 1421, clay: 2295, iron: 1071 },
        workers: 43,
        production: 463,
      },
      17: {
        resources: { wood: 1776, clay: 2926, iron: 1333 },
        workers: 50,
        production: 539,
      },
      18: {
        resources: { wood: 2220, clay: 3731, iron: 1659 },
        workers: 58,
        production: 626,
      },
      19: {
        resources: { wood: 2776, clay: 4757, iron: 2066 },
        workers: 67,
        production: 729,
      },
      20: {
        resources: { wood: 3469, clay: 6065, iron: 2572 },
        workers: 77,
        production: 847,
      },
      21: {
        resources: { wood: 4337, clay: 7733, iron: 3202 },
        workers: 89,
        production: 986,
      },
      22: {
        resources: { wood: 5421, clay: 9860, iron: 3987 },
        workers: 103,
        production: 1146,
      },
      23: {
        resources: { wood: 6776, clay: 12571, iron: 4963 },
        workers: 119,
        production: 1333,
      },
      24: {
        resources: { wood: 8470, clay: 16028, iron: 6180 },
        workers: 138,
        production: 1551,
      },
      25: {
        resources: { wood: 10588, clay: 20436, iron: 7694 },
        workers: 159,
        production: 1804,
      },
      26: {
        resources: { wood: 13235, clay: 26056, iron: 9578 },
        workers: 183,
        production: 2098,
      },
      27: {
        resources: { wood: 16544, clay: 33221, iron: 11925 },
        workers: 212,
        production: 2440,
      },
      28: {
        resources: { wood: 20680, clay: 42357, iron: 14847 },
        workers: 245,
        production: 2838,
      },
      29: {
        resources: { wood: 25849, clay: 54005, iron: 18484 },
        workers: 283,
        production: 3301,
      },
      30: {
        resources: { wood: 32312, clay: 68857, iron: 23013 },
        workers: 326,
        production: 3840,
      },
    },
    cegielnia: {
      '1': { resources: { wood: 65, clay: 50, iron: 40 }, workers: 10, production: 48 },
      '2': { resources: { wood: 83, clay: 63, iron: 50 }, workers: 11, production: 56 },
      '3': { resources: { wood: 105, clay: 80, iron: 62 }, workers: 13, production: 65 },
      '4': { resources: { wood: 133, clay: 101, iron: 76 }, workers: 15, production: 76 },
      '5': { resources: { wood: 169, clay: 128, iron: 95 }, workers: 17, production: 88 },
      '6': {
        resources: { wood: 215, clay: 162, iron: 117 },
        workers: 19,
        production: 102,
      },
      '7': {
        resources: { wood: 273, clay: 205, iron: 145 },
        workers: 22,
        production: 119,
      },
      '8': {
        resources: { wood: 346, clay: 259, iron: 180 },
        workers: 25,
        production: 138,
      },
      '9': {
        resources: { wood: 440, clay: 328, iron: 224 },
        workers: 29,
        production: 161,
      },
      '10': {
        resources: { wood: 559, clay: 415, iron: 277 },
        workers: 33,
        production: 187,
      },
      '11': {
        resources: { wood: 709, clay: 525, iron: 344 },
        workers: 37,
        production: 218,
      },
      '12': {
        resources: { wood: 901, clay: 664, iron: 426 },
        workers: 42,
        production: 253,
      },
      '13': {
        resources: { wood: 1144, clay: 840, iron: 529 },
        workers: 48,
        production: 294,
      },
      '14': {
        resources: { wood: 1453, clay: 1062, iron: 655 },
        workers: 55,
        production: 342,
      },
      '15': {
        resources: { wood: 1846, clay: 1343, iron: 813 },
        workers: 63,
        production: 398,
      },
      '16': {
        resources: { wood: 2344, clay: 1700, iron: 1008 },
        workers: 71,
        production: 463,
      },
      '17': {
        resources: { wood: 2977, clay: 2150, iron: 1250 },
        workers: 81,
        production: 539,
      },
      '18': {
        resources: { wood: 3781, clay: 2720, iron: 1550 },
        workers: 93,
        production: 626,
      },
      '19': {
        resources: { wood: 4802, clay: 3440, iron: 1922 },
        workers: 103,
        production: 729,
      },
      '20': {
        resources: { wood: 6098, clay: 4352, iron: 2383 },
        workers: 121,
        production: 847,
      },
      '21': {
        resources: { wood: 7744, clay: 5505, iron: 2955 },
        workers: 137,
        production: 986,
      },
      '22': {
        resources: { wood: 9835, clay: 6964, iron: 3664 },
        workers: 157,
        production: 1146,
      },
      '23': {
        resources: { wood: 12491, clay: 8810, iron: 4543 },
        workers: 179,
        production: 1333,
      },
      '24': {
        resources: { wood: 15863, clay: 11144, iron: 5633 },
        workers: 204,
        production: 1551,
      },
      '25': {
        resources: { wood: 20147, clay: 14098, iron: 6985 },
        workers: 232,
        production: 1804,
      },
      '26': {
        resources: { wood: 25586, clay: 17833, iron: 8662 },
        workers: 265,
        production: 2098,
      },
      '27': {
        resources: { wood: 32495, clay: 22559, iron: 10740 },
        workers: 302,
        production: 2440,
      },
      '28': {
        resources: { wood: 41268, clay: 28537, iron: 13318 },
        workers: 344,
        production: 2838,
      },
      '29': {
        resources: { wood: 52410, clay: 36100, iron: 16515 },
        workers: 392,
        production: 3301,
      },
      '30': {
        resources: { wood: 66561, clay: 45666, iron: 20478 },
        workers: 447,
        production: 3840,
      },
    },
    hutaZelaza: {
      '1': { resources: { wood: 75, clay: 65, iron: 70 }, workers: 10, production: 48 },
      '2': { resources: { wood: 94, clay: 83, iron: 87 }, workers: 12, production: 56 },
      '3': {
        resources: { wood: 118, clay: 106, iron: 108 },
        workers: 14,
        production: 65,
      },
      '4': {
        resources: { wood: 147, clay: 135, iron: 133 },
        workers: 16,
        production: 76,
      },
      '5': {
        resources: { wood: 184, clay: 172, iron: 165 },
        workers: 19,
        production: 88,
      },
      '6': {
        resources: { wood: 231, clay: 219, iron: 205 },
        workers: 22,
        production: 102,
      },
      '7': {
        resources: { wood: 289, clay: 279, iron: 254 },
        workers: 26,
        production: 119,
      },
      '8': {
        resources: { wood: 362, clay: 352, iron: 316 },
        workers: 30,
        production: 138,
      },
      '9': {
        resources: { wood: 453, clay: 454, iron: 391 },
        workers: 35,
        production: 161,
      },
      '10': {
        resources: { wood: 567, clay: 579, iron: 485 },
        workers: 41,
        production: 187,
      },
      '11': {
        resources: { wood: 710, clay: 738, iron: 602 },
        workers: 48,
        production: 218,
      },
      '12': {
        resources: { wood: 889, clay: 941, iron: 746 },
        workers: 56,
        production: 253,
      },
      '13': {
        resources: { wood: 1113, clay: 1200, iron: 925 },
        workers: 66,
        production: 294,
      },
      '14': {
        resources: { wood: 1393, clay: 1529, iron: 1147 },
        workers: 77,
        production: 342,
      },
      '15': {
        resources: { wood: 1744, clay: 1950, iron: 1422 },
        workers: 90,
        production: 398,
      },
      '16': {
        resources: { wood: 2183, clay: 2486, iron: 1764 },
        workers: 105,
        production: 463,
      },
      '17': {
        resources: { wood: 2734, clay: 3170, iron: 2187 },
        workers: 123,
        production: 539,
      },
      '18': {
        resources: { wood: 3422, clay: 4042, iron: 2712 },
        workers: 144,
        production: 626,
      },
      '19': {
        resources: { wood: 4285, clay: 5153, iron: 3363 },
        workers: 169,
        production: 729,
      },
      '20': {
        resources: { wood: 5365, clay: 6571, iron: 4170 },
        workers: 197,
        production: 847,
      },
      '21': {
        resources: { wood: 6717, clay: 8378, iron: 5170 },
        workers: 231,
        production: 986,
      },
      '22': {
        resources: { wood: 8409, clay: 10681, iron: 6411 },
        workers: 270,
        production: 1146,
      },
      '23': {
        resources: { wood: 10528, clay: 13619, iron: 7950 },
        workers: 316,
        production: 1333,
      },
      '24': {
        resources: { wood: 13181, clay: 17364, iron: 9858 },
        workers: 370,
        production: 1551,
      },
      '25': {
        resources: { wood: 16503, clay: 22139, iron: 12224 },
        workers: 433,
        production: 1804,
      },
      '26': {
        resources: { wood: 20662, clay: 28227, iron: 15158 },
        workers: 507,
        production: 2098,
      },
      '27': {
        resources: { wood: 25869, clay: 35990, iron: 18796 },
        workers: 593,
        production: 2440,
      },
      '28': {
        resources: { wood: 32388, clay: 45887, iron: 23307 },
        workers: 693,
        production: 2838,
      },
      '29': {
        resources: { wood: 40549, clay: 58506, iron: 28900 },
        workers: 811,
        production: 3301,
      },
      '30': {
        resources: { wood: 50768, clay: 74595, iron: 35837 },
        workers: 949,
        production: 3840,
      },
    },
  });

  const getBuildingCosts = (type: string, level: number): BuildingResources => {
    const buildings = allBuildingData();

    if (!buildings[type]) {
      throw new Error(`Nie znaleziono budynku typu: ${type}`);
    }

    const buildingLevelData = buildings[type][level];
    if (!buildingLevelData) {
      throw new Error(`Nie znaleziono poziomu: ${level} dla budynku typu: ${type}`);
    }

    return buildingLevelData.resources;
  };

  const getProduction = (type: string, level: number): number => {
    const buildings = allBuildingData();

    if (!buildings[type]) {
      throw new Error(`Nie znaleziono budynku typu: ${type}`);
    }

    const buildingLevelData = buildings[type][level];
    if (!buildingLevelData) {
      throw new Error(`Nie znaleziono poziomu: ${level} dla budynku typu: ${type}`);
    }

    return buildingLevelData.production;
  };

  return { getBuildingCosts, getProduction };
};
