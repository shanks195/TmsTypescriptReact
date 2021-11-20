
import { TreeItemContentProps, useTreeItem } from '@mui/lab';
import { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import  clsx  from 'clsx';
import  Typography  from '@mui/material/Typography';
export interface CustomConentTreeviewRef{}
export interface CustomConentTreeviewComponent extends 
ForwardRefRenderFunction<CustomConentTreeviewRef,TreeItemContentProps>{}
const CustomContentTreeview:CustomConentTreeviewComponent= (props,ref)=> {
    const {
      classes,
      className,
      label,
      nodeId,
      icon: iconProp,
      expansionIcon,
      displayIcon,
    } = props;
  
    const {
      disabled,
      expanded,
      selected,
      focused,
      handleExpansion,
      handleSelection,
      preventSelection,
    } = useTreeItem(nodeId);
  
    const icon = iconProp || expansionIcon || displayIcon;
  
    const handleMouseDown = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      preventSelection(event);
    };
  
    const handleExpansionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      handleExpansion(event);
    };
  
    const handleSelectionClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      handleSelection(event);
    };
  
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={clsx(className, classes.root, {
          [classes.expanded]: expanded,
          [classes.selected]: selected,
          [classes.focused]: focused,
          [classes.disabled]: disabled,
        })}
        onMouseDown={handleMouseDown}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div onClick={handleExpansionClick} className={classes.iconContainer}>
          {icon}
        </div>
        <Typography
          onClick={handleSelectionClick}
          component="div"
          className={classes.label}
        >
          {label}
        </Typography>
      </div>
    );
  }
  export default forwardRef(CustomContentTreeview)