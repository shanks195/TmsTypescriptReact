import { makeStyles } from "@mui/styles";

const DashboardStyle = makeStyles(() => ({
  page: {
    border: "1px solid red",
    padding: "20px",
    height:'200vh'

  },
  btngreen: {
    display:"inline-block",
    marginTop:"20px",
    border: "1px solid red",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    marginRight: "20px",
    marginBottom:"20px",
  }
})) as Function;

export default DashboardStyle;
