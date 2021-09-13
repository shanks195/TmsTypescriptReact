import { makeStyles } from "@mui/styles";

const positionStyle = makeStyles(() => ({
  "@global": {
    ".hidden": {
      display: "none"
    },
    ".block": {
      display: "block!important"
    },
    ".inline-block": {
      display: "inline-block!important"
    },
    ".flex": {
      display: "flex"
    },
    ".flex-column": {
      display: "flex",
      flexDirection: "column"
    },
    ".flex-center": {
      display: "flex!important",
      alignItems: "center",
      justifyContent: "center"
    },
    ".flex-wrap": {
      flexWrap: "wrap"
    },
    ".flex-grow": {
      flexGrow: 1
    },
    ".justify-start": {
      justifyContent: "flex-start!important"
    },
    ".justify-end": {
      justifyContent: "flex-end"
    },
    ".justify-between": {
      justifyContent: "space-between!important"
    },
    "justify-center": {
      justifyContent: "center"
    },
    "justify-around": {
      justifyContent: "space-around"
    },
    ".items-start": {
      alignItems: "flex-start"
    },
    ".items-end": {
      alignItems: "flex-end"
    },
    ".items-center": {
      alignItems: "center"
    },
    ".items-stretch": {
      alignItems: "space-stretch"
    },
    ".scroll-y": {
      overflowX: "hidden",
      overflowY: "auto"
    },
    ".scroll-x": {
      overflowX: "auto",
      overflowY: "hidden"
    },
    ".bottom": {
      bottom: 0
    },
    ".left": {
      left: 0
    },
    ".right": {
      right: 0
    },
    ".top": {
      top: 0
    },
    ".absolute": {
      position: "absolute"
    },
    ".relative": {
      position: "relative"
    },
    ".fixed": {
      position: "fixed"
    },
    ".sticky": {
      position: "sticky"
    },
    ".x-center": {
      left: "50%",
      transform: "translateX(-50%)"
    },
    ".y-center": {
      top: "50%",
      transform: "translateY(-50%)"
    },
    ".align-top": {
      verticalAlign: "top"
    },
    ".align-bottom": {
      verticalAlign: "bottom"
    },
    ".align-center": {
      verticalAlign: "center"
    },
    ".overflow-auto": {
      overflow: "auto!important"
    },
    ".overflow-hidden": {
      overflow: "hidden!important"
    },
    ".overflow-unset": {
      overflow: "unset!important"
    },
    ".overflow-visible": {
      overflow: "visible!important"
    }
  }
})) as Function;

export default positionStyle;