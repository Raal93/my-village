export const specialFunctionsData = () => {
  const productionBaseValues = [
    48, 56, 65, 76, 88, 102, 119, 138, 161, 187, 218, 253, 294, 342, 398, 463, 539, 626,
    729, 847, 986, 1146, 1333, 1551, 1804, 2098, 2440, 2838, 3301, 3840,
  ];

  const ratuszTimeFactorByLvl = [
    0.95, 0.91, 0.86, 0.82, 0.78, 0.75, 0.71, 0.68, 0.64, 0.61, 0.58, 0.56, 0.53, 0.51,
    0.48, 0.46, 0.44, 0.42, 0.4, 0.38, 0.36, 0.34, 0.33, 0.31, 0.3, 0.28, 0.27, 0.26,
    0.24, 0.23,
  ];
  const workersCapByLvl = [
    240, 281, 329, 386, 452, 530, 622, 729, 854, 1002, 1174, 1376, 1613, 1891, 2216, 2598,
    3045, 3569, 4183, 4904, 5748, 6737, 7896, 9255, 10848, 12715, 14904, 17469, 20476,
    24000,
  ];
  const stockCapByLvl = [
    1000, 1229, 1512, 1859, 2285, 2810, 3454, 4247, 5222, 6420, 7893, 9705, 11932, 14670,
    18037, 22177, 27266, 33523, 41217, 50675, 62305, 76604, 94184, 115798, 142373, 175047,
    215219, 264611, 325337, 400000,
  ];

  const getRatuszTimeFactorByLvl = (ratuszLvl: number): number => {
    return ratuszTimeFactorByLvl[ratuszLvl - 1];
  };

  const getWorkersCapByLvl = (lvl: number): number => workersCapByLvl[lvl - 1];

  const getStockCapByLvl = (lvl: number): number => stockCapByLvl[lvl - 1];

  const getProductionOnLvl = (level: number) => productionBaseValues[level - 1];

  return {
    getProductionOnLvl,
    getRatuszTimeFactorByLvl,
    getWorkersCapByLvl,
    getStockCapByLvl,
  };
};
