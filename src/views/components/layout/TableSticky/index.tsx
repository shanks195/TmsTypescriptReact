import { Table, TableContainer, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { FC } from 'react';

export interface TableStickyProps{
  className?: string;
  sx?: SxProps<Theme>;
}

const TableSticky: FC<TableStickyProps> = props => {

  const { children, className, sx } = props;

  return <TableContainer sx={ sx } className={ className }>
    <Table stickyHeader>
      { children }
    </Table>
  </TableContainer>

}

export default TableSticky;