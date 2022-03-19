import React from 'react';
import styled from 'styled-components';

// components
import CardContainer from './CardContainer';
import ChartContainer from './ChartContainer';
import TableContainer from './TableContainer';

const Container = styled.div`
  width: 100%;
`;

export default function Dashboard() {
  return (
    <Container>
      <CardContainer />
      <ChartContainer />
      <TableContainer />
      <TableContainer />
    </Container>
  );
}
