import { useState } from 'react';
import React from 'react';

import QueueComponent from '../../components/molecules/QueueComponent/QueueComponent';
import { simulate } from '../../logic/simulatorLogic';
import { getTime } from '../../logic/simulatorLogic';
import { SimulatorWrapper } from './SimulatorPage.styles';

const SimulatorPage = () => {
  interface QueueItem {
    building: string;
    level: number;
  }
  // interface Queue {
  //   [key: string]: QueueItem;
  // }

  const queueBasic: QueueItem[] = [
    { building: 'tartak', level: 1 },
    { building: 'cegielnia', level: 1 },
    { building: 'hutaZelaza', level: 1 },
    { building: 'ratusz', level: 2 },
    { building: 'zagroda', level: 2 },
    { building: 'spichlerz', level: 2 },
    { building: 'tartak', level: 2 },
    { building: 'cegielnia', level: 2 },
    { building: 'hutaZelaza', level: 2 },
    { building: 'tartak', level: 3 },
    { building: 'cegielnia', level: 3 },
    { building: 'hutaZelaza', level: 3 },
    { building: 'tartak', level: 4 },
    { building: 'cegielnia', level: 4 },
    { building: 'hutaZelaza', level: 4 },
    { building: 'tartak', level: 5 },
    { building: 'cegielnia', level: 5 },
    { building: 'hutaZelaza', level: 5 },
    { building: 'tartak', level: 6 },
    { building: 'cegielnia', level: 6 },
    { building: 'hutaZelaza', level: 6 },
    { building: 'zagroda', level: 3 },
    { building: 'tartak', level: 7 },
    { building: 'cegielnia', level: 7 },
    { building: 'hutaZelaza', level: 7 },
    { building: 'tartak', level: 8 },
    { building: 'cegielnia', level: 8 },
    { building: 'zagroda', level: 4 },
    { building: 'hutaZelaza', level: 8 },
    { building: 'tartak', level: 9 },
    { building: 'zagroda', level: 5 },
    { building: 'zagroda', level: 6 },
    { building: 'zagroda', level: 7 },
    { building: 'zagroda', level: 8 },
    { building: 'zagroda', level: 9 },
    { building: 'zagroda', level: 10 },
    { building: 'spichlerz', level: 3 },
    { building: 'spichlerz', level: 4 },
    { building: 'spichlerz', level: 5 },
    { building: 'spichlerz', level: 6 },
    { building: 'spichlerz', level: 7 },
    { building: 'spichlerz', level: 8 },
    { building: 'spichlerz', level: 9 },
    { building: 'spichlerz', level: 10 },
    { building: 'cegielnia', level: 9 },
    { building: 'hutaZelaza', level: 9 },
    { building: 'tartak', level: 10 },
    { building: 'cegielnia', level: 10 },
    { building: 'hutaZelaza', level: 10 },
    { building: 'tartak', level: 11 },
    { building: 'cegielnia', level: 11 },
    { building: 'hutaZelaza', level: 11 },
    { building: 'tartak', level: 12 },
    { building: 'cegielnia', level: 12 },
    { building: 'hutaZelaza', level: 12 },
    { building: 'tartak', level: 13 },
    { building: 'cegielnia', level: 13 },
    { building: 'hutaZelaza', level: 13 },
    { building: 'tartak', level: 14 },
    { building: 'cegielnia', level: 14 },
    { building: 'hutaZelaza', level: 14 },
    { building: 'tartak', level: 15 },
    { building: 'cegielnia', level: 15 },
    { building: 'hutaZelaza', level: 15 },
    { building: 'tartak', level: 16 },
    { building: 'cegielnia', level: 16 },
    { building: 'hutaZelaza', level: 16 },
    { building: 'tartak', level: 17 },
    { building: 'cegielnia', level: 17 },
    { building: 'hutaZelaza', level: 17 },
    { building: 'tartak', level: 18 },
    { building: 'cegielnia', level: 18 },
    { building: 'hutaZelaza', level: 18 },
    { building: 'tartak', level: 19 },
    { building: 'cegielnia', level: 19 },
    { building: 'hutaZelaza', level: 19 },
    { building: 'tartak', level: 20 },
    { building: 'cegielnia', level: 20 },
    { building: 'spichlerz', level: 11 },
    { building: 'spichlerz', level: 12 },
    { building: 'spichlerz', level: 13 },
    { building: 'spichlerz', level: 14 },
    { building: 'spichlerz', level: 15 },
    { building: 'hutaZelaza', level: 20 },
    { building: 'tartak', level: 21 },
    { building: 'cegielnia', level: 21 },
    { building: 'hutaZelaza', level: 21 },
    { building: 'tartak', level: 22 },
    { building: 'cegielnia', level: 22 },
    { building: 'hutaZelaza', level: 22 },
    { building: 'tartak', level: 23 },
    { building: 'cegielnia', level: 23 },
    { building: 'hutaZelaza', level: 23 },
    { building: 'tartak', level: 24 },
    { building: 'cegielnia', level: 24 },
    { building: 'hutaZelaza', level: 24 },
    { building: 'spichlerz', level: 16 },
    { building: 'spichlerz', level: 17 },
    { building: 'spichlerz', level: 18 },
    { building: 'spichlerz', level: 19 },
    { building: 'spichlerz', level: 20 },
    { building: 'spichlerz', level: 21 },
    { building: 'spichlerz', level: 22 },
    { building: 'spichlerz', level: 23 },
    { building: 'tartak', level: 25 },
    { building: 'cegielnia', level: 25 },
    { building: 'hutaZelaza', level: 25 },
    { building: 'tartak', level: 26 },
    { building: 'cegielnia', level: 26 },
    { building: 'hutaZelaza', level: 26 },
    { building: 'zagroda', level: 11 },
    { building: 'zagroda', level: 12 },
    { building: 'zagroda', level: 13 },
    { building: 'zagroda', level: 14 },
    { building: 'zagroda', level: 15 },
    { building: 'tartak', level: 27 },
    { building: 'cegielnia', level: 27 },
    { building: 'hutaZelaza', level: 27 },
    { building: 'tartak', level: 28 },
    { building: 'cegielnia', level: 28 },
    { building: 'hutaZelaza', level: 28 },
    { building: 'tartak', level: 29 },
    { building: 'cegielnia', level: 29 },
    { building: 'hutaZelaza', level: 29 },
    { building: 'tartak', level: 30 },
    { building: 'cegielnia', level: 30 },
    { building: 'hutaZelaza', level: 30 },
  ];

  const [totalTime, setTotalTime] = useState('');
  const [buildTime, setBuildTime] = useState('');
  const [waitedTime, setWaitedTime] = useState('');
  const [queue, setQueue] = useState(queueBasic);

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

  const doSimulation = () => {
    const result = simulate(queue);
    const time = getTime(result);
    setTotalTime(convertSecToTime(time.buildTime + time.waited));
    setBuildTime(convertSecToTime(time.buildTime));
    setWaitedTime(convertSecToTime(time.waited));
    console.log(result);
  };

  return (
    <SimulatorWrapper>
      <button onClick={() => doSimulation()}>Wykonaj symulację</button>
      <div>Rozbudowa wioski zajęła: {totalTime}</div>
      <div>W tym budowało: {buildTime}</div>
      <div>czekało na surowce: {waitedTime}</div>
      <QueueComponent queue={queue} />
    </SimulatorWrapper>
  );
};

export default SimulatorPage;
