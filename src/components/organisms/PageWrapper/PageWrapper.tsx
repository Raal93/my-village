import { ReactNode } from 'react';

import { manageResources } from '../../../logic/villageLogic';
import { useResourceUpdater } from '../../../logic/villageLogic';
import ShowStock from '../../atoms/ShowStock/ShowStock';
import NavigationComponent from '../NavigationComponent/NavigationComponent';

interface PropsChildren {
  children: ReactNode;
}

const PageWrapper = ({ children }: PropsChildren) => {
  const { stock, setStock, production } = manageResources();
  useResourceUpdater(setStock, production);

  return (
    <>
      <NavigationComponent />
      <div>
        <ShowStock stock={stock.wood} />
        <ShowStock stock={stock.clay} />
        <ShowStock stock={stock.iron} />
      </div>
      <div>{children}</div>
      <footer>Stopka</footer>
    </>
  );
};

export default PageWrapper;
