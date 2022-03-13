import React from 'react';
import styled from 'styled-components';

// components
import Card from '../../components/Card';

const CardContainerBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export default function CardContainer() {
  return (
    <CardContainerBlock>
      <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
      <Card title={'Bookings'} count={50} subText={'than lask week'} subTextNum={55} />
    </CardContainerBlock>
  );
}
