import React from 'react';
import styled from 'styled-components';

// components
import BasicTable from '../../components/BasicTable/BasicTable';
import TableTitle from '../../components/BasicTable/TableTitle';

const TableContainerBlock = styled.div`
  width: calc(100%-30px);
  background-color: white;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: ${(props) => props.theme.card.marginTop};
  box-shadow: ${(props) => props.theme.card.boxShadow};
  border-radius: ${(props) => props.theme.card.borderRadius};
`;

export default function TableContainer() {
  return (
    <TableContainerBlock>
      <TableTitle title={'Test Title'} />
      <BasicTable />
    </TableContainerBlock>
  );
}
