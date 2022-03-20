import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// components
import CardContainer from './CardContainer';
import ChartContainer from './ChartContainer';
import TableContainer from './TableContainer';

const Container = styled.div`
  width: 100%;
`;

// 일자, 시가, 고가, 저가, 종가, 전일비

// 일자 : date
// 전일비 : changePrice
// 고가 : highPrice
// 저가 : lowPrice
// 시가 : openingPrice
// 종가 : tradePrice

type DayStockType = {
  symbolCode: string;
  date: string;
  tradePrice: number;
  tradeTime: string;
  change: string;
  changePrice: number;
  changeRate: number;
  prevClosingPrice: number;
  exchangeCountry: string;
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  accTradePrice: number;
  accTradeVolume: number;
  periodTradePrice: number;
  periodTradeVolume: number;
  listedSharesCount?: null;
};
// 일자 : date
// 전일비 : changePrice
// 고가 : highPrice
// 저가 : lowPrice
// 시가 : openingPrice
// 종가 : tradePrice
export default function Dashboard() {
  useEffect(() => {
    async function get() {
      await axios
        .get(
          'https://finance.daum.net/api/quote/A035720/days?symbolCode=A035720&page=1&perPage=30&pagination=true'
        )
        .then(({ data }) => {
          const result = data.data;
          console.log(result);
          const r = result.map((data: DayStockType) => ({
            date: data.date,
            changePrice: data.changePrice,
            highPrice: data.highPrice,
            lowPrice: data.lowPrice,
            openingPrice: data.openingPrice,
            tradePrice: data.tradePrice
          }));
          console.log(r);
        })
        .catch((err) => console.log(err));
    }
    get();
  });
  return (
    <Container>
      <CardContainer />
      <ChartContainer />
      <TableContainer />
    </Container>
  );
}
