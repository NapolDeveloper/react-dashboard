import React from 'react';
import styled from 'styled-components';

// components
import Chart from '../../components/Chart';

const ChartContainerBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
`;

export default function ChartContainer() {
  return (
    <ChartContainerBlock>
      <Chart title={'test'} subTitle={'title'} />
    </ChartContainerBlock>
  );
}
