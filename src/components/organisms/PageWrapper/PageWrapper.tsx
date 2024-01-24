import { ReactNode, useEffect, useState } from 'react';

import ShowStock from '../../atoms/ShowStock/ShowStock';
import NavigationComponent from '../NavigationComponent/NavigationComponent';

const HOUR_TO_SEC = 60 * 60;

interface PropsChildren {
  children: ReactNode;
}

const PageWrapper = ({ children }: PropsChildren) => {
  const [woodProduction, setWoodProduction] = useState<number>(6000);
  const [woodStock, setWoodStock] = useState<number>(0);
  const [clayProduction, setClayProduction] = useState<number>(7500);
  const [clayStock, setClayStock] = useState<number>(0);
  const [ironProduction, setIronProduction] = useState<number>(40000);
  const [ironStock, setIronStock] = useState<number>(20);

  const updateWoodStock = () =>
    setWoodStock((woodStock) => woodStock + woodProduction / HOUR_TO_SEC);
  const updateClayStock = () =>
    setClayStock((clayStock) => clayStock + clayProduction / HOUR_TO_SEC);
  const updateIronStock = () =>
    setIronStock((ironStock) => ironStock + ironProduction / HOUR_TO_SEC);

  useEffect(() => {
    const intervalUpdateWood = setInterval(updateWoodStock, 1000);
    const intervalUpdateClay = setInterval(updateClayStock, 1000);
    const intervalUpdateIron = setInterval(updateIronStock, 1000);

    return () => {
      clearInterval(intervalUpdateWood);
      clearInterval(intervalUpdateClay);
      clearInterval(intervalUpdateIron);
    };
  }, []);

  return (
    <>
      <NavigationComponent />
      <div>
        <ShowStock stock={woodStock} />
        <ShowStock stock={clayStock} />
        <ShowStock stock={ironStock} />
      </div>
      <div>{children}</div>
      <footer>Stopka</footer>
    </>
  );
};

export default PageWrapper;
