import { allBuldingData, BuildingResources } from '../models/models';

export const buildingCostData = () => {
  const allBuildingData = (): allBuldingData => ({
    ratusz: {
      1: { resources: { wood: 90, clay: 80, iron: 70 }, workers: 5 },
      2: { resources: { wood: 113, clay: 102, iron: 88 }, workers: 1 },
      3: { resources: { wood: 143, clay: 130, iron: 111 }, workers: 1 },
      4: { resources: { wood: 180, clay: 166, iron: 140 }, workers: 1 },
      5: { resources: { wood: 227, clay: 211, iron: 176 }, workers: 1 },
      6: { resources: { wood: 286, clay: 270, iron: 222 }, workers: 2 },
      7: { resources: { wood: 360, clay: 344, iron: 280 }, workers: 2 },
      8: { resources: { wood: 454, clay: 438, iron: 353 }, workers: 2 },
      9: { resources: { wood: 572, clay: 559, iron: 445 }, workers: 3 },
      10: { resources: { wood: 720, clay: 712, iron: 560 }, workers: 3 },
      11: { resources: { wood: 908, clay: 908, iron: 706 }, workers: 3 },
      12: { resources: { wood: 1144, clay: 1158, iron: 890 }, workers: 4 },
      13: {
        resources: { wood: 1441, clay: 1476, iron: 1121 },
        workers: 5,
      },
      14: {
        resources: { wood: 1816, clay: 1882, iron: 1412 },
        workers: 5,
      },
      15: {
        resources: { wood: 2288, clay: 2400, iron: 1779 },
        workers: 7,
      },
      16: {
        resources: { wood: 2883, clay: 3060, iron: 2242 },
        workers: 8,
      },
      17: {
        resources: { wood: 3632, clay: 3902, iron: 2825 },
        workers: 9,
      },
      18: {
        resources: { wood: 4577, clay: 4975, iron: 3560 },
        workers: 10,
      },
      19: {
        resources: { wood: 5767, clay: 6343, iron: 4485 },
        workers: 12,
      },
      20: {
        resources: { wood: 7266, clay: 8087, iron: 5651 },
        workers: 15,
      },
      21: {
        resources: { wood: 9155, clay: 10311, iron: 7120 },
        workers: 17,
      },
      22: {
        resources: { wood: 11535, clay: 13146, iron: 8972 },
        workers: 19,
      },
      23: {
        resources: { wood: 14534, clay: 16762, iron: 11304 },
        workers: 23,
      },
      24: {
        resources: { wood: 18313, clay: 21371, iron: 14244 },
        workers: 27,
      },
      25: {
        resources: { wood: 23075, clay: 27248, iron: 17947 },
        workers: 31,
      },
      26: {
        resources: { wood: 29074, clay: 34741, iron: 22613 },
        workers: 37,
      },
      27: {
        resources: { wood: 36633, clay: 44295, iron: 38493 },
        workers: 43,
      },
      28: {
        resources: { wood: 46158, clay: 56476, iron: 35901 },
        workers: 51,
      },
      29: {
        resources: { wood: 58159, clay: 72007, iron: 45235 },
        workers: 59,
      },
      30: {
        resources: { wood: 73280, clay: 91809, iron: 56996 },
        workers: 69,
      },
    },
    tartak: {
      '1': { resources: { wood: 50, clay: 60, iron: 40 }, workers: 5 },
      '2': { resources: { wood: 63, clay: 77, iron: 50 }, workers: 1 },
      '3': { resources: { wood: 78, clay: 98, iron: 63 }, workers: 1 },
      '4': { resources: { wood: 98, clay: 124, iron: 77 }, workers: 1 },
      '5': { resources: { wood: 122, clay: 159, iron: 96 }, workers: 1 },
      '6': {
        resources: { wood: 153, clay: 202, iron: 120 },
        workers: 1,
      },
      '7': {
        resources: { wood: 191, clay: 258, iron: 149 },
        workers: 2,
      },
      '8': {
        resources: { wood: 238, clay: 329, iron: 185 },
        workers: 2,
      },
      '9': {
        resources: { wood: 298, clay: 419, iron: 231 },
        workers: 2,
      },
      '10': {
        resources: { wood: 373, clay: 534, iron: 287 },
        workers: 2,
      },
      '11': {
        resources: { wood: 466, clay: 681, iron: 358 },
        workers: 3,
      },
      '12': {
        resources: { wood: 582, clay: 868, iron: 446 },
        workers: 3,
      },
      '13': {
        resources: { wood: 728, clay: 1107, iron: 555 },
        workers: 4,
      },
      '14': {
        resources: { wood: 909, clay: 1412, iron: 691 },
        workers: 5,
      },
      '15': {
        resources: { wood: 1137, clay: 1800, iron: 860 },
        workers: 5,
      },
      '16': {
        resources: { wood: 1421, clay: 2295, iron: 1071 },
        workers: 5,
      },
      '17': {
        resources: { wood: 1776, clay: 2926, iron: 1333 },
        workers: 7,
      },
      '18': {
        resources: { wood: 2220, clay: 3731, iron: 1659 },
        workers: 8,
      },
      '19': {
        resources: { wood: 2776, clay: 4757, iron: 2066 },
        workers: 9,
      },
      '20': {
        resources: { wood: 3469, clay: 6065, iron: 2572 },
        workers: 10,
      },
      '21': {
        resources: { wood: 4337, clay: 7733, iron: 3202 },
        workers: 12,
      },
      '22': {
        resources: { wood: 5421, clay: 9860, iron: 3987 },
        workers: 14,
      },
      '23': {
        resources: { wood: 6776, clay: 12571, iron: 4963 },
        workers: 16,
      },
      '24': {
        resources: { wood: 8470, clay: 16028, iron: 6180 },
        workers: 19,
      },
      '25': {
        resources: { wood: 10588, clay: 20436, iron: 7694 },
        workers: 21,
      },
      '26': {
        resources: { wood: 13235, clay: 26056, iron: 9578 },
        workers: 24,
      },
      '27': {
        resources: { wood: 16544, clay: 33221, iron: 11925 },
        workers: 29,
      },
      '28': {
        resources: { wood: 20680, clay: 42357, iron: 14847 },
        workers: 33,
      },
      '29': {
        resources: { wood: 25849, clay: 54005, iron: 18484 },
        workers: 38,
      },
      '30': {
        resources: { wood: 32312, clay: 68857, iron: 23013 },
        workers: 43,
      },
    },
    cegielnia: {
      '1': { resources: { wood: 65, clay: 50, iron: 40 }, workers: 10 },
      '2': { resources: { wood: 83, clay: 63, iron: 50 }, workers: 1 },
      '3': { resources: { wood: 105, clay: 80, iron: 62 }, workers: 2 },
      '4': { resources: { wood: 133, clay: 101, iron: 76 }, workers: 2 },
      '5': { resources: { wood: 169, clay: 128, iron: 95 }, workers: 2 },
      '6': {
        resources: { wood: 215, clay: 162, iron: 117 },
        workers: 2,
      },
      '7': {
        resources: { wood: 273, clay: 205, iron: 145 },
        workers: 3,
      },
      '8': {
        resources: { wood: 346, clay: 259, iron: 180 },
        workers: 3,
      },
      '9': {
        resources: { wood: 440, clay: 328, iron: 224 },
        workers: 4,
      },
      '10': {
        resources: { wood: 559, clay: 415, iron: 277 },
        workers: 4,
      },
      '11': {
        resources: { wood: 709, clay: 525, iron: 344 },
        workers: 4,
      },
      '12': {
        resources: { wood: 901, clay: 664, iron: 426 },
        workers: 5,
      },
      '13': {
        resources: { wood: 1144, clay: 840, iron: 529 },
        workers: 6,
      },
      '14': {
        resources: { wood: 1453, clay: 1062, iron: 655 },
        workers: 7,
      },
      '15': {
        resources: { wood: 1846, clay: 1343, iron: 813 },
        workers: 8,
      },
      '16': {
        resources: { wood: 2344, clay: 1700, iron: 1008 },
        workers: 8,
      },
      '17': {
        resources: { wood: 2977, clay: 2150, iron: 1250 },
        workers: 10,
      },
      '18': {
        resources: { wood: 3781, clay: 2720, iron: 1550 },
        workers: 12,
      },
      '19': {
        resources: { wood: 4802, clay: 3440, iron: 1922 },
        workers: 13,
      },
      '20': {
        resources: { wood: 6098, clay: 4352, iron: 2383 },
        workers: 15,
      },
      '21': {
        resources: { wood: 7744, clay: 5505, iron: 2955 },
        workers: 16,
      },
      '22': {
        resources: { wood: 9835, clay: 6964, iron: 3664 },
        workers: 20,
      },
      '23': {
        resources: { wood: 12491, clay: 8810, iron: 4543 },
        workers: 22,
      },
      '24': {
        resources: { wood: 15863, clay: 11144, iron: 5633 },
        workers: 25,
      },
      '25': {
        resources: { wood: 20147, clay: 14098, iron: 6985 },
        workers: 28,
      },
      '26': {
        resources: { wood: 25586, clay: 17833, iron: 8662 },
        workers: 33,
      },
      '27': {
        resources: { wood: 32495, clay: 22559, iron: 10740 },
        workers: 37,
      },
      '28': {
        resources: { wood: 41268, clay: 28537, iron: 13318 },
        workers: 42,
      },
      '29': {
        resources: { wood: 52410, clay: 36100, iron: 16515 },
        workers: 48,
      },
      '30': {
        resources: { wood: 66561, clay: 45666, iron: 20478 },
        workers: 55,
      },
    },
    hutaZelaza: {
      '1': { resources: { wood: 75, clay: 65, iron: 70 }, workers: 10 },
      '2': { resources: { wood: 94, clay: 83, iron: 87 }, workers: 2 },
      '3': { resources: { wood: 118, clay: 106, iron: 108 }, workers: 2 },
      '4': { resources: { wood: 147, clay: 135, iron: 133 }, workers: 2 },
      '5': { resources: { wood: 184, clay: 172, iron: 165 }, workers: 3 },
      '6': {
        resources: { wood: 231, clay: 219, iron: 205 },
        workers: 3,
      },
      '7': {
        resources: { wood: 289, clay: 279, iron: 254 },
        workers: 4,
      },
      '8': {
        resources: { wood: 362, clay: 352, iron: 316 },
        workers: 4,
      },
      '9': {
        resources: { wood: 453, clay: 454, iron: 391 },
        workers: 5,
      },
      '10': {
        resources: { wood: 567, clay: 579, iron: 485 },
        workers: 6,
      },
      '11': {
        resources: { wood: 710, clay: 738, iron: 602 },
        workers: 7,
      },
      '12': {
        resources: { wood: 889, clay: 941, iron: 746 },
        workers: 8,
      },
      '13': {
        resources: { wood: 1113, clay: 1200, iron: 925 },
        workers: 10,
      },
      '14': {
        resources: { wood: 1393, clay: 1529, iron: 1147 },
        workers: 11,
      },
      '15': {
        resources: { wood: 1744, clay: 1950, iron: 1422 },
        workers: 13,
      },
      '16': {
        resources: { wood: 2183, clay: 2486, iron: 1764 },
        workers: 15,
      },
      '17': {
        resources: { wood: 2734, clay: 3170, iron: 2187 },
        workers: 18,
      },
      '18': {
        resources: { wood: 3422, clay: 4042, iron: 2712 },
        workers: 21,
      },
      '19': {
        resources: { wood: 4285, clay: 5153, iron: 3363 },
        workers: 25,
      },
      '20': {
        resources: { wood: 5365, clay: 6571, iron: 4170 },
        workers: 28,
      },
      '21': {
        resources: { wood: 6717, clay: 8378, iron: 5170 },
        workers: 34,
      },
      '22': {
        resources: { wood: 8409, clay: 10681, iron: 6411 },
        workers: 39,
      },
      '23': {
        resources: { wood: 10528, clay: 13619, iron: 7950 },
        workers: 46,
      },
      '24': {
        resources: { wood: 13181, clay: 17364, iron: 9858 },
        workers: 54,
      },
      '25': {
        resources: { wood: 16503, clay: 22139, iron: 12224 },
        workers: 63,
      },
      '26': {
        resources: { wood: 20662, clay: 28227, iron: 15158 },
        workers: 74,
      },
      '27': {
        resources: { wood: 25869, clay: 35990, iron: 18796 },
        workers: 86,
      },
      '28': {
        resources: { wood: 32388, clay: 45887, iron: 23307 },
        workers: 100,
      },
      '29': {
        resources: { wood: 40549, clay: 58506, iron: 28900 },
        workers: 118,
      },
      '30': {
        resources: { wood: 50768, clay: 74595, iron: 35837 },
        workers: 138,
      },
    },
    zagroda: {
      1: { resources: { wood: 45, clay: 40, iron: 30 }, workers: 0 },
      2: { resources: { wood: 59, clay: 53, iron: 39 }, workers: 0 },
      3: { resources: { wood: 76, clay: 70, iron: 50 }, workers: 0 },
      4: { resources: { wood: 99, clay: 92, iron: 64 }, workers: 0 },
      5: { resources: { wood: 129, clay: 121, iron: 83 }, workers: 0 },
      6: { resources: { wood: 167, clay: 160, iron: 107 }, workers: 0 },
      7: { resources: { wood: 217, clay: 212, iron: 138 }, workers: 0 },
      8: { resources: { wood: 282, clay: 279, iron: 178 }, workers: 0 },
      9: { resources: { wood: 367, clay: 369, iron: 230 }, workers: 0 },
      10: { resources: { wood: 477, clay: 487, iron: 297 }, workers: 0 },
      11: { resources: { wood: 620, clay: 642, iron: 383 }, workers: 0 },
      12: { resources: { wood: 806, clay: 848, iron: 494 }, workers: 0 },
      13: { resources: { wood: 1048, clay: 1119, iron: 637 }, workers: 0 },
      14: { resources: { wood: 1363, clay: 1477, iron: 822 }, workers: 0 },
      15: {
        resources: { wood: 1772, clay: 1950, iron: 1060 },
        workers: 0,
      },
      16: {
        resources: { wood: 2303, clay: 2574, iron: 1368 },
        workers: 0,
      },
      17: {
        resources: { wood: 2994, clay: 3398, iron: 1764 },
        workers: 0,
      },
      18: {
        resources: { wood: 3893, clay: 4486, iron: 2276 },
        workers: 0,
      },
      19: {
        resources: { wood: 5060, clay: 5921, iron: 2936 },
        workers: 0,
      },
      20: {
        resources: { wood: 6579, clay: 7816, iron: 3787 },
        workers: 0,
      },
      21: {
        resources: { wood: 8525, clay: 10317, iron: 4886 },
        workers: 0,
      },
      22: {
        resources: { wood: 11118, clay: 13618, iron: 6302 },
        workers: 0,
      },
      23: {
        resources: { wood: 14453, clay: 17976, iron: 8130 },
        workers: 0,
      },
      24: {
        resources: { wood: 18789, clay: 23728, iron: 10488 },
        workers: 0,
      },
      25: {
        resources: { wood: 24426, clay: 31321, iron: 13529 },
        workers: 0,
      },
      26: {
        resources: { wood: 31754, clay: 41344, iron: 17453 },
        workers: 0,
      },
      27: {
        resources: { wood: 41280, clay: 54574, iron: 22514 },
        workers: 0,
      },
      28: {
        resources: { wood: 53664, clay: 72037, iron: 29043 },
        workers: 0,
      },
      29: {
        resources: { wood: 69763, clay: 95089, iron: 37466 },
        workers: 0,
      },
      30: {
        resources: { wood: 90692, clay: 125517, iron: 48331 },
        workers: 0,
      },
    },
    spichlerz: {
      1: { resources: { wood: 60, clay: 50, iron: 40 }, workers: 0 },
      2: { resources: { wood: 76, clay: 64, iron: 50 }, workers: 0 },
      3: { resources: { wood: 96, clay: 81, iron: 62 }, workers: 0 },
      4: { resources: { wood: 121, clay: 102, iron: 77 }, workers: 0 },
      5: { resources: { wood: 154, clay: 130, iron: 96 }, workers: 0 },
      6: { resources: { wood: 194, clay: 165, iron: 120 }, workers: 0 },
      7: { resources: { wood: 246, clay: 210, iron: 149 }, workers: 0 },
      8: { resources: { wood: 311, clay: 279, iron: 178 }, workers: 0 },
      9: { resources: { wood: 393, clay: 338, iron: 230 }, workers: 0 },
      10: { resources: { wood: 498, clay: 430, iron: 297 }, workers: 0 },
      11: { resources: { wood: 630, clay: 546, iron: 383 }, workers: 0 },
      12: { resources: { wood: 796, clay: 693, iron: 446 }, workers: 0 },
      13: { resources: { wood: 1007, clay: 880, iron: 555 }, workers: 0 },
      14: { resources: { wood: 1274, clay: 1180, iron: 691 }, workers: 0 },
      15: { resources: { wood: 1612, clay: 1420, iron: 860 }, workers: 0 },
      16: {
        resources: { wood: 2039, clay: 1803, iron: 1071 },
        workers: 0,
      },
      17: {
        resources: { wood: 2580, clay: 2290, iron: 1333 },
        workers: 0,
      },
      18: {
        resources: { wood: 3264, clay: 2908, iron: 1659 },
        workers: 0,
      },
      19: {
        resources: { wood: 4128, clay: 3693, iron: 2066 },
        workers: 0,
      },
      20: {
        resources: { wood: 5222, clay: 4691, iron: 2572 },
        workers: 0,
      },
      21: {
        resources: { wood: 6606, clay: 5957, iron: 3202 },
        workers: 0,
      },
      22: {
        resources: { wood: 8357, clay: 7599, iron: 3987 },
        workers: 0,
      },
      23: {
        resources: { wood: 10572, clay: 9608, iron: 4963 },
        workers: 0,
      },
      24: {
        resources: { wood: 13373, clay: 12203, iron: 6180 },
        workers: 0,
      },
      25: {
        resources: { wood: 16917, clay: 15497, iron: 7694 },
        workers: 0,
      },
      26: {
        resources: { wood: 21400, clay: 19682, iron: 9578 },
        workers: 0,
      },
      27: {
        resources: { wood: 27071, clay: 24996, iron: 11925 },
        workers: 0,
      },
      28: {
        resources: { wood: 34245, clay: 31745, iron: 14847 },
        workers: 0,
      },
      29: {
        resources: { wood: 43620, clay: 40316, iron: 18484 },
        workers: 0,
      },
      30: {
        resources: { wood: 54799, clay: 51201, iron: 23013 },
        workers: 0,
      },
    },
  });

  const getBuildingCost = (type: string, level: number): BuildingResources => {
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

  const getWorkersNeeded = (type: string, level: number): number => {
    const buildings = allBuildingData();

    if (!buildings[type]) {
      throw new Error(`Nie znaleziono budynku typu: ${type}`);
    }

    const buildingLevelData = buildings[type][level];
    if (!buildingLevelData) {
      throw new Error(`Nie znaleziono poziomu: ${level} dla budynku typu: ${type}`);
    }

    return buildingLevelData.workers;
  };

  return {
    getBuildingCost,
    getWorkersNeeded,
  };
};
