import React from 'react';
import styled from 'styled-components';

// components
import Chart from '../../components/Chart';

const ChartContainerBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: ${(props) => props.theme.card.marginTop};
  justify-content: space-around;
`;

export default function ChartContainer() {
  return (
    <ChartContainerBlock>
      <Chart title={'Website Views'} subTitle={'Last Campaign Performance'} />
      <Chart title={'Daily Sales'} subTitle={'(+15%) increase in today sales.'} />
      <Chart title={'Completed Tasks'} subTitle={'Last Campaign Performance'} />
    </ChartContainerBlock>
  );
}
