import { Box } from '@mui/material';
import { FC } from 'react';
import clsx from 'clsx';

export interface TabPanelProps{
  className?: string;
  dir?: string;
  index: number;
  value: number;
  padding?: boolean;
}

const TabPanel: FC<TabPanelProps> = props => {

  const { children, className, dir, index, value, padding = true  } = props;
  const show = index === value;

  return <div
    role="tabpanel"
    hidden={ !show }
    dir={ dir }
    className={ className }
  >
    {
      show &&
      <Box className={ clsx({ 'p-3': padding }) }>
        { children }
      </Box>
    }
  </div>

}

export default TabPanel;