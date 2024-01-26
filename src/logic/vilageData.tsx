export const productionData = () => {
  const productionBaseValues = [
    30, 35, 41, 47, 55, 64, 74, 86, 100, 117, 136, 158, 184, 214, 249, 289, 337, 391, 455,
    530, 616, 717, 833, 969, 1127, 1311, 1525, 1774, 2063, 2400,
  ];

  const getProductionOnLvl = (level: number) => productionBaseValues[level - 1];

  return { getProductionOnLvl };
};
