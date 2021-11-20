import { makeStyles } from "@mui/styles";

const inlineStyle = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    "& .inline-card": {
      border: "1px solid #d5d5d5",
      paddingInline: "16px",
      width: "100%",
      height: "100%",
      "& .legend-title": {
        color: "#071180",
        fontSize: "14px",
        fontWeight: 500,
      },
      "& .legend-content": {
        padding: "12px 0",
      },
    },
  },
})) as Function;

export default inlineStyle;
