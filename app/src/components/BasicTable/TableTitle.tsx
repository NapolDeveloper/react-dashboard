import React from 'react';
import styled from 'styled-components';

type TableTitleProps = {
  title: string;
};

const TableTitleBlock = styled.div`
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
`;

export default function TableTitle({ title }: TableTitleProps) {
  return (
    <div>
      <TableTitleBlock>{title}</TableTitleBlock>
    </div>
  );
}
