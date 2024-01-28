import { simulate } from '../../logic/simulatorLogic';

const SimulatorPage = () => {
  interface QueueItem {
    building: 'tartak' | 'cegielnia' | 'hutaZelaza';
    level: number;
  }

  interface Queue {
    [key: string]: QueueItem;
  }

  const queue: Queue = {
    '1': { building: 'tartak', level: 1 },
    '2': { building: 'cegielnia', level: 1 },
    '3': { building: 'hutaZelaza', level: 1 },
    '4': { building: 'tartak', level: 2 },
    '5': { building: 'cegielnia', level: 2 },
    '6': { building: 'hutaZelaza', level: 2 },
    '7': { building: 'tartak', level: 3 },
    '8': { building: 'cegielnia', level: 3 },
    '9': { building: 'hutaZelaza', level: 3 },
    '10': { building: 'tartak', level: 4 },
    '11': { building: 'cegielnia', level: 4 },
    '12': { building: 'hutaZelaza', level: 4 },
    '13': { building: 'tartak', level: 5 },
    '14': { building: 'cegielnia', level: 5 },
    '15': { building: 'hutaZelaza', level: 5 },
    '16': { building: 'tartak', level: 6 },
    '17': { building: 'cegielnia', level: 6 },
    '18': { building: 'hutaZelaza', level: 6 },
    '19': { building: 'tartak', level: 7 },
    '20': { building: 'cegielnia', level: 7 },
    '21': { building: 'hutaZelaza', level: 7 },
    '22': { building: 'tartak', level: 8 },
    '23': { building: 'cegielnia', level: 8 },
    '24': { building: 'hutaZelaza', level: 8 },
    '25': { building: 'tartak', level: 9 },
    '26': { building: 'cegielnia', level: 9 },
    '27': { building: 'hutaZelaza', level: 9 },
    '28': { building: 'tartak', level: 10 },
    '29': { building: 'cegielnia', level: 10 },
    '30': { building: 'hutaZelaza', level: 10 },
    '31': { building: 'tartak', level: 11 },
    '32': { building: 'cegielnia', level: 11 },
    '33': { building: 'hutaZelaza', level: 11 },
    '34': { building: 'tartak', level: 12 },
    '35': { building: 'cegielnia', level: 12 },
    '36': { building: 'hutaZelaza', level: 12 },
    '37': { building: 'tartak', level: 13 },
    '38': { building: 'cegielnia', level: 13 },
    '39': { building: 'hutaZelaza', level: 13 },
    '40': { building: 'tartak', level: 14 },
    '41': { building: 'cegielnia', level: 14 },
    '42': { building: 'hutaZelaza', level: 14 },
    '43': { building: 'tartak', level: 15 },
    '44': { building: 'cegielnia', level: 15 },
    '45': { building: 'hutaZelaza', level: 15 },
    '46': { building: 'tartak', level: 16 },
    '47': { building: 'cegielnia', level: 16 },
    '48': { building: 'hutaZelaza', level: 16 },
    '49': { building: 'tartak', level: 17 },
    '50': { building: 'cegielnia', level: 17 },
    '51': { building: 'hutaZelaza', level: 17 },
    '52': { building: 'tartak', level: 18 },
    '53': { building: 'cegielnia', level: 18 },
    '54': { building: 'hutaZelaza', level: 18 },
    '55': { building: 'tartak', level: 19 },
    '56': { building: 'cegielnia', level: 19 },
    '57': { building: 'hutaZelaza', level: 19 },
    '58': { building: 'tartak', level: 20 },
    '59': { building: 'cegielnia', level: 20 },
    '60': { building: 'hutaZelaza', level: 20 },
    '61': { building: 'tartak', level: 21 },
    '62': { building: 'cegielnia', level: 21 },
    '63': { building: 'hutaZelaza', level: 21 },
    '64': { building: 'tartak', level: 22 },
    '65': { building: 'cegielnia', level: 22 },
    '66': { building: 'hutaZelaza', level: 22 },
    '67': { building: 'tartak', level: 23 },
    '68': { building: 'cegielnia', level: 23 },
    '69': { building: 'hutaZelaza', level: 23 },
    '70': { building: 'tartak', level: 24 },
    '71': { building: 'cegielnia', level: 24 },
    '72': { building: 'hutaZelaza', level: 24 },
    '73': { building: 'tartak', level: 25 },
    '74': { building: 'cegielnia', level: 25 },
    '75': { building: 'hutaZelaza', level: 25 },
    '76': { building: 'tartak', level: 26 },
    '77': { building: 'cegielnia', level: 26 },
    '78': { building: 'hutaZelaza', level: 26 },
    '79': { building: 'tartak', level: 27 },
    '80': { building: 'cegielnia', level: 27 },
    '81': { building: 'hutaZelaza', level: 27 },
    '82': { building: 'tartak', level: 28 },
    '83': { building: 'cegielnia', level: 28 },
    '84': { building: 'hutaZelaza', level: 28 },
    '85': { building: 'tartak', level: 29 },
    '86': { building: 'cegielnia', level: 29 },
    '87': { building: 'hutaZelaza', level: 29 },
    '88': { building: 'tartak', level: 30 },
    '89': { building: 'cegielnia', level: 30 },
    '90': { building: 'hutaZelaza', level: 30 },
  };

  const result = simulate(queue);
  return (
    <>
      <div>{console.log(result)}</div>
      <div>Strona Symulatora</div>
    </>
  );
};

export default SimulatorPage;
