import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ItemContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: ${(props) => props.theme.sidebar.borderRadius};
  cursor: pointer;
  margin-top: 10px;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: 0.2s ease-in-out;
  }
`;

type SidebarItemProps = {
  route: string;
  title: string;
};
type HandleRouteProps = {
  path: string;
};

export default function SidebarItem({ route, title }: SidebarItemProps) {
  const navigate = useNavigate();

  // const handleRoute = (path: string) => {
  const handleRoute = ({ path }: HandleRouteProps) => {
    navigate(`/${path}`);
  };

  return <ItemContainer onClick={() => handleRoute({ path: route })}>{title}</ItemContainer>;
}
