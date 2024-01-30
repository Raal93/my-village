import React from 'react';

import QueueItemComponent from '../../atoms/QueueItemComponent/QueueItemComponent';
import { QueueTable, QueueWrapper } from './QueueComponent.styles';

interface QueueProps {
  queue: { [key: string]: QueueItem };
}

interface QueueItem {
  building: 'tartak' | 'cegielnia' | 'hutaZelaza';
  level: number;
}

const QueueComponent = ({ queue }: QueueProps) => {
  return (
    <QueueWrapper>
      <QueueTable>
        <tbody>
          {Object.values(queue).map((queueItem: QueueItem, i: number) => (
            <QueueItemComponent {...queueItem} key={i} />
          ))}
        </tbody>
      </QueueTable>
    </QueueWrapper>
  );
};

export default QueueComponent;
