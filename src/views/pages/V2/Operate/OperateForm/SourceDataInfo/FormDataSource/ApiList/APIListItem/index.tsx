import { Avatar, Badge, Grid, IconButton, Typography } from "@mui/material";
import clsx from 'clsx';
import {
  ForwardRefRenderFunction, forwardRef,
  useState, useImperativeHandle, useEffect
} from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { IoMdListBox } from "react-icons/io";
import DetailInfoCheckedStyle from "./style";

export interface DetailInfoCheckedOption {
  label?: string;
  code?: string
}

export interface DetailInfoCheckedProps {
  isDelete?: boolean;
  isAdd?: boolean;
  options?: DetailInfoCheckedOption[];
  center?: boolean;
  onDelete?(): void;
  onChange?(): void;
  onAdd?(): void;
}

export interface DetailInfoCheckedRef {
  getValue(): string | undefined
}

interface IapilistItem
  extends ForwardRefRenderFunction<
  DetailInfoCheckedRef,
  DetailInfoCheckedProps
  > { };
const UserItem: IapilistItem = (props, ref) => {

  const {
    isDelete,
    isAdd,
    center,
    options,
    onDelete,
    onChange,
    onAdd
  } = props;

  const classes = DetailInfoCheckedStyle();
  const rootStyle = clsx(classes.root, center ? classes.center : "");
  const checkedBadgeStyle = clsx('checked__badge', !isDelete ? classes.noneDelete : "");

  const [indexActive, setIndexAcive] = useState<number>(0);
  const [CurrentValue, setCurrentValue] = useState<string | undefined>();

  useImperativeHandle(ref, () => ({
    getValue: () => CurrentValue
  }))

  useEffect(() => {
    if (options && options.length > 0 && CurrentValue === undefined) {
      setCurrentValue(options[0].code);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentValue])


  const handleClickIcon = () => {
    onDelete && onDelete();
  }

  const handleAdd = () => {
    onAdd && onAdd();
  }

  const handleChangeActive = (index: number, code: string) => {
    onChange && onChange();
    setIndexAcive(index);
    setCurrentValue(code ?? "");
  }
  
  return (
    <Grid container spacing={1} className={rootStyle}>
      {
        options?.map((item, index) => {
          return (
            <Grid
              item
              xl={3} md={3} sm={3}
              className={index === indexActive ? classes.active : ""}
              key={index}
            >
              <Badge
                color="info"
                overlap="circular"
                badgeContent={
                  <CloseIcon />
                }
                className={checkedBadgeStyle}
                onClick={handleClickIcon}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  onClick={() => handleChangeActive(index, item.code ?? "")}
                >
                  <IoMdListBox />
                </Avatar>
              </Badge>
              <Typography
                className="label_name"
                variant="subtitle1"
              >
                {item.label}
              </Typography>
            </Grid>
          )
        })
      }

      {(() => {
        if (isAdd) {
          return (
            <Grid
              item
              xl={3} md={3} sm={3}
              className={(options && options?.length > 0) ? "" : classes.left}
            >
              <IconButton
                size='large'
                className="btn__add"
                onClick={handleAdd}
              >
                <AddIcon />
              </IconButton>
            </Grid>
          )
        }
      })()}
    </Grid>
  );
};

export default forwardRef(UserItem);
