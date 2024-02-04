import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import QueueItemComponent from '../../atoms/QueueItemComponent/QueueItemComponent';
import { QueueTable, QueueWrapper } from './QueueComponent.styles';

interface QueueProps {
  queue: QueueItem[];
  onDragEnd: (result: any) => void;
}

interface QueueItem {
  building: string;
  level: number;
}

const QueueComponent = ({ queue, onDragEnd }: QueueProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-queue">
        {(provided) => (
          <QueueWrapper ref={provided.innerRef} {...provided.droppableProps}>
            <QueueTable>
              <tbody>
                {queue.map((queueItem: QueueItem, index: number) => (
                  <Draggable key={index} draggableId={String(index)} index={index}>
                    {(provided) => (
                      <tr
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <QueueItemComponent {...queueItem} />
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </QueueTable>
          </QueueWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default QueueComponent;
