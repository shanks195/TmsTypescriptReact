import { makeStyles } from "@mui/styles";

const TextAreaStyle = makeStyles(()=>({
    
    root: {
        "& textarea": {
            height:'106px !important',
            padding:10,
            overflowY: "scroll!important",
            overflowX:"hidden!important",
            marginBottom: "23px!important",
            backgroundColor: "#f2f3f9",
            border: "none",
            resize:"none",
        },
        "& textarea::-webkit-scrollbar": {
            width: '3px',
            cursor:"pointer"
        },
        "& textarea::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
        },
        "& textarea::-webkit-scrollbar-thumb": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.5)",
        },
       "& textarea:focus": {
        outline:"none",
       }
    },
    
}))
export default TextAreaStyle