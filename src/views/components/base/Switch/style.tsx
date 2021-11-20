import { makeStyles } from "@mui/styles";

const SwichStyle = makeStyles({
  root:{
    "& .MuiSwitch-root":{
      padding: '7px !important'
    },
    "& .MuiSwitch-track":{
      borderRadius: '12px !important'
    },
    "& .Mui-checked+.MuiSwitch-track":{
      backgroundColor: "#1a9b06 !important"
    },
    "& .Mui-checked":{
      color: "#FFF !important"
    }
  }
}) as Function;

export default SwichStyle;