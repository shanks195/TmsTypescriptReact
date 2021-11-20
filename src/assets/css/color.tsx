import { makeStyles } from "@mui/styles";

const colorStyle = makeStyles(() => ({
  "@global": {
    ".bg-primary,.btn-primary": {
      backgroundColor: "var(--mscb-primary)!important",
      color: "#fff"
    },
    ".bg-secondary,.btn-secondary": {
      backgroundColor: "var(--mscb-secondary)",
      color: "#fff"
    },
    ".bg-success,.btn-success": {
      backgroundColor: "var(--mscb-success)",
      color: "#fff"
    },
    ".bg-info,.btn-info": {
      backgroundColor: "var(--mscb-info)",
      color: "#fff"
    },
    ".bg-danger,.bg-error,.btn-danger,.btn-error": {
      backgroundColor: "var(--mscb-danger)",
      color: "#fff"
    },
    ".bg-warning,.btn-warning": {
      backgroundColor: "var(--mscb-warning)",
      color: "#fff"
    },
    ".bg-white,.btn-white": {
      backgroundColor: "#fff",
      color: "var(--mscb-black)"
    },
    ".bg-gray,.btn-gray": {
      backgroundColor: "var(--mscb-gray)",
      color: "var(--mscb-black)"
    },
    ".bg-black,.btn-black": {
      backgroundColor: "var(--mscb-black)",
      color: "#fff"
    },
    ".bg-yellow,.btn-yellow": {
      backgroundColor: "var(--mscb-yellow)",
      color: "#fff"
    },
    ".bg-pink,.btn-pink": {
      backgroundColor: "var(--mscb-pink)",
      color: "#fff"
    }
  }
})) as Function;

export default colorStyle;