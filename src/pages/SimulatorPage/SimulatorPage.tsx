import { useState } from 'react';
import React, { useEffect } from 'react';

import QueueComponent from '../../components/molecules/QueueComponent/QueueComponent';
import { simulationLoop } from '../../logic/simulationLoop';
import { getTime } from '../../logic/simulationLoop';
import { BuildingResources, QueueItem } from '../../models/models';
import { BelowFixed, FixedTop, SimulatorWrapper } from './SimulatorPage.styles';

const SimulatorPage = () => {
  const optimalQueue: QueueItem[] = [
    { building: 'tartak', level: 1 },
    { building: 'cegielnia', level: 1 },
    { building: 'hutaZelaza', level: 1 },
    { building: 'tartak', level: 2 },
    { building: 'cegielnia', level: 2 },
    { building: 'tartak', level: 3 },
    { building: 'cegielnia', level: 3 },
    { building: 'cegielnia', level: 4 },
    { building: 'tartak', level: 4 },
    { building: 'cegielnia', level: 5 },
    { building: 'tartak', level: 5 },
    { building: 'hutaZelaza', level: 2 },
    { building: 'tartak', level: 6 },
    { building: 'hutaZelaza', level: 3 },
    { building: 'cegielnia', level: 6 },
    { building: 'hutaZelaza', level: 4 },
    { building: 'tartak', level: 7 },
    { building: 'cegielnia', level: 7 },
    { building: 'hutaZelaza', level: 5 },
    { building: 'tartak', level: 8 },
    { building: 'cegielnia', level: 8 },
    { building: 'tartak', level: 9 },
    { building: 'hutaZelaza', level: 6 },
    { building: 'cegielnia', level: 9 },
    { building: 'spichlerz', level: 2 },
    { building: 'cegielnia', level: 10 },
    { building: 'hutaZelaza', level: 7 },
    { building: 'tartak', level: 10 },
    { building: 'hutaZelaza', level: 8 },
    { building: 'spichlerz', level: 3 },
    { building: 'cegielnia', level: 11 },
    { building: 'tartak', level: 11 },
    { building: 'spichlerz', level: 4 },
    { building: 'tartak', level: 12 },
    { building: 'hutaZelaza', level: 9 },
    { building: 'cegielnia', level: 12 },
    { building: 'spichlerz', level: 5 },
    { building: 'spichlerz', level: 6 },
    { building: 'cegielnia', level: 13 },
    { building: 'tartak', level: 13 },
    { building: 'hutaZelaza', level: 10 },
    { building: 'spichlerz', level: 7 },
    { building: 'cegielnia', level: 14 },
    { building: 'tartak', level: 14 },
    { building: 'hutaZelaza', level: 11 },
    { building: 'spichlerz', level: 8 },
    { building: 'cegielnia', level: 15 },
    { building: 'tartak', level: 15 },
    { building: 'spichlerz', level: 9 },
    { building: 'cegielnia', level: 16 },
    { building: 'hutaZelaza', level: 12 },
    { building: 'tartak', level: 16 },
    { building: 'spichlerz', level: 10 },
    { building: 'cegielnia', level: 17 },
    { building: 'hutaZelaza', level: 13 },
    { building: 'tartak', level: 17 },
    { building: 'ratusz', level: 2 },
    { building: 'spichlerz', level: 11 },
    { building: 'cegielnia', level: 18 },
    { building: 'zagroda', level: 2 },
    { building: 'hutaZelaza', level: 14 },
    { building: 'tartak', level: 18 },
    { building: 'spichlerz', level: 12 },
    { building: 'tartak', level: 19 },
    { building: 'zagroda', level: 3 },
    { building: 'cegielnia', level: 19 },
    { building: 'hutaZelaza', level: 15 },
    { building: 'spichlerz', level: 13 },
    { building: 'spichlerz', level: 14 },
    { building: 'cegielnia', level: 20 },
    { building: 'hutaZelaza', level: 16 },
    { building: 'zagroda', level: 4 },
    { building: 'ratusz', level: 3 },
    { building: 'tartak', level: 20 },
    { building: 'ratusz', level: 4 },
    { building: 'ratusz', level: 5 },
    { building: 'ratusz', level: 6 },
    { building: 'spichlerz', level: 15 },
    { building: 'cegielnia', level: 21 },
    { building: 'ratusz', level: 7 },
    { building: 'tartak', level: 21 },
    { building: 'zagroda', level: 5 },
    { building: 'hutaZelaza', level: 17 },
    { building: 'spichlerz', level: 16 },
    { building: 'cegielnia', level: 22 },
    { building: 'tartak', level: 22 },
    { building: 'zagroda', level: 6 },
    { building: 'hutaZelaza', level: 18 },
    { building: 'ratusz', level: 8 },
    { building: 'spichlerz', level: 17 },
    { building: 'cegielnia', level: 23 },
    { building: 'hutaZelaza', level: 19 },
    { building: 'zagroda', level: 7 },
    { building: 'tartak', level: 23 },
    { building: 'hutaZelaza', level: 20 },
    { building: 'spichlerz', level: 18 },
    { building: 'cegielnia', level: 24 },
    { building: 'ratusz', level: 9 },
    { building: 'tartak', level: 24 },
    { building: 'ratusz', level: 10 },
    { building: 'zagroda', level: 8 },
    { building: 'spichlerz', level: 19 },
    { building: 'cegielnia', level: 25 },
    { building: 'tartak', level: 25 },
    { building: 'ratusz', level: 11 },
    { building: 'spichlerz', level: 20 },
    { building: 'spichlerz', level: 21 },
    { building: 'cegielnia', level: 26 },
    { building: 'ratusz', level: 12 },
    { building: 'ratusz', level: 13 },
    { building: 'ratusz', level: 14 },
    { building: 'zagroda', level: 9 },
    { building: 'ratusz', level: 15 },
    { building: 'ratusz', level: 16 },
    { building: 'ratusz', level: 17 },
    { building: 'tartak', level: 26 },
    { building: 'hutaZelaza', level: 21 },
    { building: 'zagroda', level: 10 },
    { building: 'spichlerz', level: 22 },
    { building: 'cegielnia', level: 27 },
    { building: 'tartak', level: 27 },
    { building: 'ratusz', level: 18 },
    { building: 'hutaZelaza', level: 22 },
    { building: 'spichlerz', level: 23 },
    { building: 'cegielnia', level: 28 },
    { building: 'zagroda', level: 11 },
    { building: 'tartak', level: 28 },
    { building: 'hutaZelaza', level: 23 },
    { building: 'spichlerz', level: 24 },
    { building: 'cegielnia', level: 29 },
    { building: 'tartak', level: 29 },
    { building: 'zagroda', level: 12 },
    { building: 'hutaZelaza', level: 24 },
    { building: 'ratusz', level: 19 },
    { building: 'ratusz', level: 20 },
    { building: 'zagroda', level: 13 },
    { building: 'spichlerz', level: 25 },
    { building: 'cegielnia', level: 30 },
    { building: 'tartak', level: 30 },
    { building: 'hutaZelaza', level: 25 },
    { building: 'zagroda', level: 14 },
    { building: 'zagroda', level: 15 },
    { building: 'zagroda', level: 16 },
    { building: 'zagroda', level: 17 },
    { building: 'zagroda', level: 18 },
    { building: 'zagroda', level: 19 },
    { building: 'zagroda', level: 20 },
  ];

  const initialQueue: QueueItem[] = [
    { building: 'tartak', level: 1 },
    { building: 'cegielnia', level: 1 },
    { building: 'hutaZelaza', level: 1 },
  ];
  const initialResult = {
    building: '',
    level: 0,
    costs: { wood: 0, clay: 0, iron: 0 },
    stock: { wood: 0, clay: 0, iron: 0 },
    production: { wood: 5, clay: 5, iron: 5 },
    timeWaited: 0,
    missingResources: { wood: 0, clay: 0, iron: 0 },
    generatedResourcesWhileWaiting: { wood: 0, clay: 0, iron: 0 },
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
  const initialStockAfter = { wood: 0, clay: 0, iron: 0 };

  const [stockBefore, setStockBefore] = useState<BuildingResources>(initialStockAfter);
  const [totalTime, setTotalTime] = useState('');
  const [buildTime, setBuildTime] = useState('');
  const [waitedTime, setWaitedTime] = useState('');
  const [stockOnStartBuilding, setStockOnStartBuilding] =
    useState<BuildingResources>(initialStockAfter);
  const [stockAfter, setStockAfter] = useState<BuildingResources>(initialStockAfter);
  const [wastedRess, setWastedRess] = useState<BuildingResources>(initialStockAfter);
  const [queue, setQueue] = useState<QueueItem[]>(optimalQueue);
  const [simulationResult, setSimulationResult] = useState([initialResult]);

  useEffect(() => {
    const result = simulationLoop(initialQueue);
    setSimulationResult(result);
    const time = getTime(result);
    setTotalTime(convertSecToTime(time.buildTime + time.waited));
    setBuildTime(convertSecToTime(time.buildTime));
    setWaitedTime(convertSecToTime(time.waited));
    console.log(result);
  }, []);

  const convertSecToTime = (seconds: number): string => {
    let timeLeft = 0;
    const days = Math.floor(seconds / (24 * 60 * 60));
    timeLeft = seconds % (24 * 60 * 60);
    const hours = Math.floor(timeLeft / (60 * 60));
    timeLeft = timeLeft % (60 * 60);
    const minutes = Math.floor(timeLeft / 60);
    timeLeft = timeLeft % 60;
    return (
      days + ' dni, ' + hours + ' godzin, ' + minutes + ' minut, ' + timeLeft + ' sekund'
    );
  };

  const doSimulation = (queue: QueueItem[]) => {
    const result = simulationLoop(queue);
    setSimulationResult(result);
    const time = getTime(result);
    setTotalTime(convertSecToTime(time.buildTime + time.waited));
    setBuildTime(convertSecToTime(time.buildTime));
    setWaitedTime(convertSecToTime(time.waited));
    setStockAfter(result[result.length - 1].stockAfterFinishBuilding);
    setStockBefore(result[0].stock);
    setStockOnStartBuilding(result[result.length - 1].stockAfterStartBuilding);
    setWastedRess(result[result.length - 1].stockOver);

    console.log(result);
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return; // Jeśli element został upuszczony poza listę, nic nie rób
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return; // Jeśli pozycja elementu się nie zmieniła, również nic nie rób

    const newQueue = Array.from(queue); // Przypisanie nowej tablicy do zmiennej, aby nie modyfikować stanu bezpośrednio
    const [reorderedItem] = newQueue.splice(source.index, 1); // Usunięcie przeciąganego elementu z jego pierwotnej pozycji
    newQueue.splice(destination.index, 0, reorderedItem); // Wstawienie elementu na nową pozycję

    const reorderedQueue = reorderQueue(newQueue, queue[result.draggableId].building);

    setQueue(reorderedQueue);
    doSimulation(reorderedQueue);
  };

  const reorderQueue = (queue: QueueItem[], dragged: string): QueueItem[] => {
    let currLvl =
      dragged === 'ratusz' || dragged === 'zagroda' || dragged === 'spichlerz' ? 2 : 1;
    const reorderedQueue = queue.map((current) => {
      if (current.building === dragged) {
        return { ...current, level: currLvl++ };
      } else return current;
    });
    return reorderedQueue;
  };

  const addToQueue = (buildingType: string) => {
    const newQueue = Array.from(queue);
    newQueue.push({ building: buildingType, level: 0 });
    const reorderedNewQueue = reorderQueue(newQueue, buildingType);
    setQueue(reorderedNewQueue);
    doSimulation(reorderedNewQueue);
  };

  const delFromQueue = (buildingType: string, buildingLevel: number) => {
    const elementID = queue.findIndex(
      (e) => e.building === buildingType && e.level === buildingLevel,
    );
    const newQueue = Array.from(queue);
    newQueue.splice(elementID, 1);
    const reorderedNewQueue = reorderQueue(newQueue, buildingType);
    setQueue(reorderedNewQueue);
    doSimulation(reorderedNewQueue);
  };

  return (
    <SimulatorWrapper>
      <FixedTop>
        <button onClick={() => doSimulation(queue)}>Wykonaj symulację</button>
        <div>
          Spichlerz na starcie || drewno: {stockBefore.wood} || glina: {stockBefore.clay}{' '}
          || żelazo: {stockBefore.iron} ||
        </div>
        <div>Rozbudowa wioski zajęła: {totalTime}</div>
        <div>W tym budowało: {buildTime}</div>
        <div>czekało na surowce: {waitedTime}</div>
        <div>
          Stracone surowce z powodu przepełnionego spichlerza || drewno: {wastedRess.wood}{' '}
          || glina: {wastedRess.clay} || żelazo: {wastedRess.iron} ||
        </div>
        <div>
          Spichlerz po rozpoczęciu budowy ostatniego budynku w kolejce || drewno:{' '}
          {stockOnStartBuilding.wood} || glina: {stockOnStartBuilding.clay} || żelazo:{' '}
          {stockOnStartBuilding.iron} ||
        </div>
        <div>
          Spichlerz po zakończeniu kolejki || drewno: {stockAfter.wood} || glina:{' '}
          {stockAfter.clay} || żelazo: {stockAfter.iron} ||
        </div>
      </FixedTop>
      <BelowFixed>
        <QueueComponent
          queue={queue}
          onDragEnd={onDragEnd}
          addToQueue={addToQueue}
          delFromQueue={delFromQueue}
        />
      </BelowFixed>
    </SimulatorWrapper>
  );
};

export default SimulatorPage;
