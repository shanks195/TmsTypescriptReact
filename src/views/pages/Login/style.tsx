import { makeStyles } from "@mui/styles";
import bg from "assets/images/bg/login.png";

const loginStyle = makeStyles(() => ({
  "& .tms-login":{
    height:"100vh !important"
  }
  ,
  page: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    '& .user-input-box':{
      paddingBottom: '25px'
    },
    '& .pass-input-box':{
      paddingBottom: '25px'
    }
  },
  title: {
    borderBottom: "5px solid var(--mscb-primary)"
  }
})) as Function;

export default loginStyle;
