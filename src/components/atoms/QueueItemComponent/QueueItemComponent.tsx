import React from 'react';

import {
  CellBuldingName,
  DeleteBtn,
  Icon,
  QueueDataCell,
} from './QueueItemComponent.styles';

// interface QueueItem {
//   building: string;
//   level: number;
// }

interface QueueProps {
  building: string;
  level: number;
  delFromQueue: (buildingType: string, buildingLevel: number) => void;
}

const QueueItemComponent = ({ building, level, delFromQueue }: QueueProps) => {
  const convertBuildingName = (building: string): string => {
    if (building === 'hutaZelaza') return 'Huta żelaza';
    return building.charAt(0).toLocaleUpperCase() + building.slice(1);
  };

  const getIcon = (building: string, level: number): string => {
    let iconNumber; // tymczasowo uproszczone
    if (level < 10) iconNumber = 3;
    else if (level < 20) iconNumber = 3;
    else iconNumber = 3;

    return '../../../../resources/icons/' + building + iconNumber + '.png';
  };

  return (
    <QueueDataCell>
      <Icon src={getIcon(building, level)} alt={`${building}.png`} />
      <CellBuldingName>
        {convertBuildingName(building)} Poziom {level}{' '}
        <DeleteBtn onClick={() => delFromQueue(building, level)}>X</DeleteBtn>
      </CellBuldingName>
    </QueueDataCell>
  );
};

export default QueueItemComponent;
