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

export default function Sidebar() {
  return (
    <Container>
      <SidebarItem route={'dashboard'} title={'Dashboard'} />
      <SidebarItem route={'favorites'} title={'Favorites'} />
      <SidebarItem route={'test'} title={'Test'} />
      <SidebarItem route={'test2'} title={'Test2'} />
    </Container>
  );
}
