import { forwardRef, useState, useImperativeHandle } from "react";
import clsx from 'clsx';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel";
import checkGroupStyle from "./style";

export interface CheckboxValue {
  label: string;
  value: string;
  checked: boolean;
}

export interface CheckboxGroupProps {
  className?: string;
  checkallLabel: string;
  listOptions: CheckboxValue[];
  defaultCheckedList?: CheckboxValue[];
}

interface ICheckList {
  checkall: boolean,
  checkedList: CheckboxValue[]
}
export interface CheckboxGroupRef {
  getValue(): ICheckList
}


interface CheckboxGroupComponent extends React.ForwardRefRenderFunction<CheckboxGroupRef, CheckboxGroupProps> { }

const CheckboxGroup: CheckboxGroupComponent = (props, ref) => {

  const { className, listOptions = [], checkallLabel, defaultCheckedList = [] } = props;
  const classes = checkGroupStyle();
  const [checkedList, setCheckedList] = useState<CheckboxValue[]>(defaultCheckedList);
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>(listOptions);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  useImperativeHandle(ref, () => ({
    getValue: () => ({
      checkedList: checkedList, checkall: checkAll
    })
  }));

  const handleChildCheckboxChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckState = checkboxes.map(
      (aCheckbox, i) => (index === i ? { ...aCheckbox, checked: e.target.checked } : aCheckbox)
    );
    const listChecked = newCheckState.filter(item => item.checked === true);
    setCheckboxes(newCheckState);
    setCheckedList(listChecked);
    setIndeterminate(!!listChecked.length && listChecked.length < listOptions.length);
    setCheckAll(listChecked.length === listOptions.length);
  };

  const renderCheckboxes = () => {
    if (!checkboxes) {
      return null;
    }
    if (!checkedList) {
      return checkboxes.map((item, index) => (
        <FormControlLabel
          key={index}
          label={item.label}
          control={<MuiCheckbox
            checked={item.checked}
            name={item.label}
            onChange={handleChildCheckboxChange(index)} />}
        />
      ));
    }
    else {
      const handleArr: CheckboxValue[] = [];
      checkboxes.forEach(item => {
        const listCheck = checkedList.filter(it => it.value === item.value);
        if (listCheck.length > 0) {
          item.checked = true;
          handleArr.push(item);
        }
        else {
          handleArr.push(item);
        }
      })
      return handleArr.map((item, index) => (
        <FormControlLabel
          key={index}
          label={item.label}
          control={<MuiCheckbox
            checked={item.checked}
            name={item.label}
            onChange={handleChildCheckboxChange(index)} />}
        />
      ));
    }
  };

  const onCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let listChange: CheckboxValue[] = [];
    listChange = checkboxes.map(item => (item.checked ? { ...item, checked: e.target.checked } : item));
    setCheckboxes(listChange);
    setCheckedList(e.target.checked ? listOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className={clsx(classes.rootAll, 'wh-full')}>
      <div className={className}>
        <div className="checboxGroup">
          <MuiCheckbox indeterminate={indeterminate} checked={checkAll} onChange={onCheckAllChange} />
          <span className="label-all">{checkallLabel}</span>
          <br />
          <div className="checkbox-children">{renderCheckboxes()}</div>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(CheckboxGroup)
