import React from 'react';
import styled from 'styled-components';

// components
import Chart from '../Chart/Chart';

const ChartCardContainer = styled.div`
  flex: 1;
  /* background-color: aliceblue; */
`;

type ChartCardProps = {
  title: string;
  subTitle: string;
};

export default function ChartCard({ title, subTitle }: ChartCardProps) {
  return (
    <ChartCardContainer>
      <Chart />
      <></>
    </ChartCardContainer>
  );
}
