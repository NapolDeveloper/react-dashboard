import React from 'react';
import styled from 'styled-components';

const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  height: 100px;
  border-radius: ${(props) => props.theme.card.borderRadius};
  padding: 8px 16px;
  box-shadow: ${(props) => props.theme.card.boxShadow};
  background-color: #fff;
  margin: 0 15px;
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

const SubTextContainerBlock = styled.div`
  border-top: 0.5px solid rgba(123, 128, 154, 0.25);
  padding-top: 10px;
`;
const SubTextBlock = styled.span`
  color: rgb(123, 128, 154);
  font-size: 14px;
`;
const SubTextNumBlock = styled.span`
  color: rgb(76, 175, 80);
  font-size: 14px;
  font-weight: 700;
`;

type CardProps = {
  title: string;
  count: number;
  subText: string;
  subTextNum?: number;
};

function Card({ title, count, subText, subTextNum }: CardProps) {
  return (
    <ContainerBlock>
      <TopBoxBlock>
        <TitleBlock>{title}</TitleBlock>
        <CountBlock>{count}</CountBlock>
      </TopBoxBlock>
      <SubTextContainerBlock>
        <SubTextNumBlock>{`${subTextNum}% `}</SubTextNumBlock>
        <SubTextBlock>{subText}</SubTextBlock>
      </SubTextContainerBlock>
    </ContainerBlock>
  );
}

export default Card;
