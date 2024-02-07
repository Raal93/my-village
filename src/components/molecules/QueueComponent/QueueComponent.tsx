import React from 'react';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import QueueItemComponent from '../../atoms/QueueItemComponent/QueueItemComponent';
import { QueueTable, QueueWrapper } from './QueueComponent.styles';

interface QueueProps {
  queue: QueueItem[];
  onDragEnd: (result: any) => void;
  addToQueue: (buildingType: string) => void;
  delFromQueue: (buildingType: string, buildingLevel: number) => void;
}

interface QueueItem {
  building: string;
  level: number;
}

const QueueComponent = ({ queue, onDragEnd, addToQueue, delFromQueue }: QueueProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <>
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
                          <QueueItemComponent
                            {...queueItem}
                            delFromQueue={delFromQueue}
                          />
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
      <div>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="ratusz">Ratusz</option>
          <option value="tartak">Tartak</option>
          <option value="cegielnia">Cegielnia</option>
          <option value="hutaZelaza">Huta żelaza</option>
          <option value="spichlerz">Spichlerz</option>
          <option value="zagroda">Zagroda</option>
        </select>
        <button onClick={() => addToQueue(selectedOption)}>Dodaj</button>
      </div>
    </>
  );
};

export default QueueComponent;
