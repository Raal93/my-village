import { ReactNode } from 'react';
import React from 'react';

import { manageResources } from '../../../logic/villageLogic';
import { stockUpdater } from '../../../logic/villageLogic';
import ShowStock from '../../atoms/ShowStock/ShowStock';
import NavigationComponent from '../NavigationComponent/NavigationComponent';

interface PropsChildren {
  children: ReactNode;
}

const PageWrapper = ({ children }: PropsChildren) => {
  const { stock, setStock, resourceBuilding, upgradeBuilding } = manageResources();
  stockUpdater(setStock, resourceBuilding);

  return (
    <>
      <NavigationComponent />
      {/* <div>
        Drewno: <ShowStock stock={stock.wood} />
        Glina: <ShowStock stock={stock.clay} />
        Żelazo: <ShowStock stock={stock.iron} />
      </div> */}
      {/* <div>
        <div>
          <button onClick={() => upgradeBuilding('wood')}>Podnieś poziom Tartaku</button>
          <span>Aktualny lvl: {resourceBuilding.wood.level}</span>
          <span> || Produkcja: {resourceBuilding.wood.production.toFixed(0)}</span>
        </div>
        <div>
          <button onClick={() => upgradeBuilding('clay')}>Podnieś poziom Cegielni</button>
          <span>Aktualny lvl: {resourceBuilding.clay.level}</span>
          <span> || Produkcja: {resourceBuilding.clay.production.toFixed(0)}</span>
        </div>
        <div>
          <button onClick={() => upgradeBuilding('iron')}>
            Podnieś poziom Huty Żelaza
          </button>
          <span>Aktualny lvl: {resourceBuilding.iron.level}</span>
          <span> || Produkcja: {resourceBuilding.iron.production.toFixed(0)}</span>
        </div>
      </div> */}
      <div>{children}</div>
      {/* <footer>Stopka</footer> */}
    </>
  );
};

export default PageWrapper;
