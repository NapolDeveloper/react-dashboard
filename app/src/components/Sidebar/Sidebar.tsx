import React from 'react';
import styled from 'styled-components';

// components
import SidebarItem from './SidebarItem';

const Container = styled.div`
  height: 100%;
  top: 0;
  left: 0;
  flex: 1.3; // 후에 값 수정 예정
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  box-shadow: ${(props) => props.theme.card.boxShadow};
  border-radius: ${(props) => props.theme.card.borderRadius};
  padding: 10px;
  min-width: 250px;
`;
const ItemContainer = styled.div`
  padding: 10px;
`;

const SidebarTitleBlock = styled.div`
  border-bottom: 0.5px solid rgba(123, 128, 154, 0.25);
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default function Sidebar() {
  return (
    <Container>
      <SidebarTitle />
      <ItemContainer>
        <SidebarItem route={'dashboard'} title={'Dashboard'} />
        <SidebarItem route={'favorites'} title={'Favorites'} />
        <SidebarItem route={'signin'} title={'Sign In'} />
        <SidebarItem route={'signup'} title={'Sign Up'} />
      </ItemContainer>
    </Container>
  );
}

const SidebarTitle = () => {
  return <SidebarTitleBlock>STOCK DASHBOARD</SidebarTitleBlock>;
};
