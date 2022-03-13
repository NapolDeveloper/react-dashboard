import React from 'react';
import styled from 'styled-components';

// components
import BasicTable from '../../components/BasicTable/BasicTable';
import TableTitle from '../../components/BasicTable/TableTitle';

const TableContainerBlock = styled.div`
  width: calc(100%-30px);
  /* padding: ${(props) => props.theme.card.padding}; */
  box-shadow: ${(props) => props.theme.card.boxShadow};
  margin: 10px 15px;
  background-color: white;
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
