import React from 'react';

import QueueItemComponent from '../../atoms/QueueItemComponent/QueueItemComponent';
import { QueueTable, QueueWrapper } from './QueueComponent.styles';

interface QueueProps {
  queue: QueueItem[];
}

interface QueueItem {
  building: string;
  level: number;
}

const QueueComponent = ({ queue }: QueueProps) => {
  return (
    <QueueWrapper>
      <QueueTable>
        <tbody>
          {queue.map((queueItem: QueueItem, i: number) => (
            <QueueItemComponent {...queueItem} key={i} />
          ))}
        </tbody>
      </QueueTable>
    </QueueWrapper>
  );
};

export default QueueComponent;
