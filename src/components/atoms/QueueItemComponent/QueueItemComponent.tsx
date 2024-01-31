import React from 'react';

import { Icon, QueueDataCell, QueueDataRow } from './QueueItemComponent.styles';

interface QueueItem {
  building: string;
  level: number;
}

const QueueItemComponent = ({ building, level }: QueueItem) => {
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
    <QueueDataRow>
      <QueueDataCell>
        <Icon src={getIcon(building, level)} alt={`${building}.png`} />
        {convertBuildingName(building)} Poziom {level}
      </QueueDataCell>
    </QueueDataRow>
  );
};

export default QueueItemComponent;
