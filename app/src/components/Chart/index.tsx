import React from 'react';
import styled from 'styled-components';

// components
import Chart from '../Chart/Chart';

const ChartCardContainer = styled.div`
  flex: 1;
  background-color: white;
  padding: 10px;
  border-radius: ${(props) => props.theme.card.borderRadius};
  margin: 0 15px;
  box-shadow: ${(props) => props.theme.card.boxShadow};
`;

const ChartCardTextBox = styled.div`
  width: 100%;
  padding: 24px 8px 8px;
`;

const ChartCardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const ChartCardSubTitle = styled.div`
  font-size: 14px;
  color: rgb(123, 128, 154);
`;
const Test = styled.div`
  border-top: 0.5px solid rgba(123, 128, 154, 0.25);
  margin-top: 8px;
`;

type ChartCardProps = {
  title: string;
  subTitle: string;
};

export default function ChartCard({ title, subTitle }: ChartCardProps) {
  return (
    <ChartCardContainer>
      <Chart width={200} />
      <ChartCardTextBox>
        <ChartCardTitle>{title}</ChartCardTitle>
        <ChartCardSubTitle>{subTitle}</ChartCardSubTitle>
        <Test></Test>
      </ChartCardTextBox>
    </ChartCardContainer>
  );
}
