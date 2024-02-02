import styled from 'styled-components';

export const QueueDataRow = styled.tr`
  background-color: #fff3d3;
`;

export const QueueDataCell = styled.td`
  width: 400px;
  display: flex;
  align-items: center; /* Wyśrodkowanie pionowe */
  justify-content: flex-start; /* Wyśrodkowanie poziome */
  text-align: center;
  letter-spacing: 0.2px;
  font-size: 9pt;
  font-family: Verdana, Arial;
  font-weight: 700;
  text-decoration: none;
  color: #603000;
  padding: 3px;
  margin: 1px;
`;

export const Icon = styled.img`
  height: 100%;
  margin-right: 10px;
`;

export const CellBuldingName = styled.div`
  width: 170px;
  text-align: left;
`;
