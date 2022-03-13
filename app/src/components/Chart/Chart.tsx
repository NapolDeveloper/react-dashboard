import React from 'react';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';

// interface IChartContainer {
//   width: number;
// }

// chart 특성상 비율에 맞춰져서 움직이는듯
// const ChartContainer = styled.div<IChartContainer>`
const ChartContainer = styled.div`
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  border-radius: 10px;
  padding: 10px;
`;

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      color: 'rgb(255,255,255)'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
      color: 'rgb(255,255,255)'
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      // borderColor: 'rgb(53, 162, 235)',
      // backgroundColor: 'rgba(158, 161, 163, 0.5)'
      borderColor: '#e8e8e8',
      backgroundColor: 'rgb(255,255,255)'
    }
  ]
};

function Chart() {
  return (
    <ChartContainer>
      <Line options={options} data={data} />
    </ChartContainer>
  );
}

export default Chart;
