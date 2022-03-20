import React, { useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

// components
import Chart from '../../components/Chart';

const ChartContainerBlock = styled(Grid)`
  margin-top: 0;
  width: 100%;
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: ${(props) => props.theme.card.marginTop};
  }
`;

export default function ChartContainer() {
  return (
    <ChartContainerBlock container rowSpacing={{ xs: 2, md: '0' }}>
      <Grid item xs={12} md={4}>
        <Chart title={'Website Views'} subTitle={'Last Campaign Performance'} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Chart title={'Daily Sales'} subTitle={'(+15%) increase in today sales.'} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Chart title={'Completed Tasks'} subTitle={'Last Campaign Performance'} />
      </Grid>
    </ChartContainerBlock>
  );
}
