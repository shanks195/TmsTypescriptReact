import { makeStyles } from "@mui/styles";

const commonStyle = makeStyles(() => ({
  "@global": {
    "body, #root": {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      color: 'var(--mscb-secondary)',
      fontSize: 'var(--mscb-fontsize)',
      backgroundColor: 'var(--mscb-gray)'
    },
    ".wh-full": {
      width: "100%",
      height: "100%"
    },
    ".h-full": {
      height: "100%"
    },
    ".w-full": {
      width: "100%"
    },
    '.shadow': {
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
    }
  }
})) as Function;

export default commonStyle;
