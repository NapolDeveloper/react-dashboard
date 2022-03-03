import React from 'react';
import styled from 'styled-components';

const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  border-radius: 10px;
  padding: 8px 16px;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  // 후에 지울 값
  /* background-color: #ffff5b; */
  width: 200px;
  margin: 50px 0 0 50px;
`;

const TopBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBlock = styled.span`
  color: rgb(123, 128, 154);
  font-size: 14px;
`;
const CountBlock = styled.span`
  font-weight: bold;
  font-size: 24px;
`;
const SubText = styled.span`
  color: rgb(123, 128, 154);
  font-size: 14px;
  border-top: 0.5px solid rgba(123, 128, 154, 0.25);
  padding-top: 10px;
`;

type CardProps = {
  title: string;
  count: number;
  subText: string;
};

function Card({ title, count, subText }: CardProps) {
  return (
    <ContainerBlock>
      <TopBoxBlock>
        <TitleBlock>{title}</TitleBlock>
        <CountBlock>{count}</CountBlock>
      </TopBoxBlock>
      <SubText>{subText}</SubText>
    </ContainerBlock>
  );
}

export default Card;
