import styled from 'styled-components';

export const QueueDataRow = styled.tr`
  background-color: #fff3d3;
  /* font-weight: 700; */
  font-size: 16px;
  height: 35px;
`;

export const QueueDataCell = styled.td`
  height: 35px;
  width: 400px;
  padding: 2px 3px;
  display: flex;
  align-items: center; /* Wyśrodkowanie pionowe */
  justify-content: flex-start; /* Wyśrodkowanie poziome */
  text-align: center;
  letter-spacing: 0.2px;
  font-weight: 500;
`;

export const Icon = styled.img`
  height: 100%;
  margin-right: 20px;
`;
