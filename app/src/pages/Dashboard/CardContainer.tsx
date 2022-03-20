import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

// components
import Card from '../../components/Card';

const CardContainerBlock = styled(Grid)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function CardContainer() {
  return (
    <CardContainerBlock container rowSpacing={{ xs: 2, md: '0' }}>
      <Grid item xs={12} md={3}>
        <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      </Grid>
    </CardContainerBlock>
  );
}
