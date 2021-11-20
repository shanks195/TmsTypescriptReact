import { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import clsx from 'clsx';

export interface LoadingProps{
  className?: string;
}

const Loading: FC<LoadingProps> = props => {

  const { className } = props;

  return (
    <div className={ clsx(className, 'flex-center wh-full') }>
      <CircularProgress />
    </div>
  );
};

export default Loading;
