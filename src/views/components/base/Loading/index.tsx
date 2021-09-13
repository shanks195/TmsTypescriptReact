import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC = () => {
  return (
    <div className="flex-center wh-full">
      <CircularProgress />
    </div>
  );
};

export default Loading;
