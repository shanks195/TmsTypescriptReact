import { Button, ButtonGroup } from '@mui/material';
import { CgChevronDoubleLeft, CgChevronDoubleRight, CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import { FC, useRef } from 'react';
import Select, { SelectRef } from 'views/components/base/Select';
import Input, { InputRef } from 'views/components/base/Input';
import pagingStyle from './style';
import clsx from 'clsx';

export interface PaginationProps{
  className?: string;
  currentPage?: number;
  totalPage: number;
  onChange?(newPage: number): void;
  limit?: number;
  onLimit?(limit: number): void;
}

const Pagination: FC<PaginationProps> = props => {

  
  const classes = pagingStyle();
  const { 
    className, 
    currentPage = 1, 
    totalPage, 
    onChange, 
    limit = 15,
    onLimit 
  } = props;

  const limitRef = useRef<SelectRef>(null);
  const currentRef = useRef<InputRef>(null);

  const onClickFirst = () => {
    currentPage === 1 || (onChange && onChange(1));
  }

  const onClickPrev = () => {
    currentPage === 1 || (onChange && onChange(currentPage - 1));
  }

  const onClickNext = () => {
    currentPage === totalPage || (onChange && onChange(currentPage + 1));
  }

  const onClickLast = () => {
    currentPage === totalPage || (onChange && onChange(totalPage));
  }

  const onChangePage = () => {
    const newValue = Number(currentRef.current?.getValue()).valueOf();
    if (!newValue || newValue < 1 || newValue === currentPage || newValue > totalPage) return;
    onChange && onChange(newValue);
  }

  const onChangeLimit = () => {
    const newLimit = Number(limitRef.current?.getValue()).valueOf();
    if (!newLimit) return;
    onLimit && onLimit(newLimit);
  }

  if (totalPage < 1) return null;

  return <nav className={ clsx(classes.root, className) }>
    <div className="flex">
      <div className={ classes.label }>Page size:</div>
      <Select
        ref={ limitRef }
        fullWidth={ false }
        value={ limit }
        className={ classes.limit }
        onChange={ onChangeLimit }
        options={[
          { value: 15, label: '15' },
          { value: 20, label: '20' },
          { value: 30, label: '30' },
          { value: 40, label: '40' },
          { value: 50, label: '50' },
        ]}
      />
      <ButtonGroup>
        <Button className={ classes.button } disabled={ currentPage === 1 } onClick={ onClickFirst }>
          <CgChevronDoubleLeft />
        </Button>
        <Button className={ classes.button } disabled={ currentPage === 1 } onClick={ onClickPrev }>
          <CgChevronLeft />
        </Button>
      </ButtonGroup>
      <div className="flex items-center input-page">
        <Input 
          ref={ currentRef } 
          value={ currentPage.toString() } 
          className={ classes.current } 
          fullWidth={ false }
          onChange={ onChangePage }
        />
        <span className={ classes.total }> of { totalPage }</span>
      </div>
      <ButtonGroup>
        <Button className={ classes.button } disabled={ currentPage === totalPage } onClick={ onClickNext }>
          <CgChevronRight />
        </Button>
        <Button className={ classes.button } disabled={ currentPage === totalPage } onClick={ onClickLast }>
          <CgChevronDoubleRight />
        </Button>
      </ButtonGroup>
    </div>
  </nav>

}

export default Pagination;