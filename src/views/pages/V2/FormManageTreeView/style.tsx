import { makeStyles } from "@mui/styles";

const FormTreeviewStyle =makeStyles(()=>({
    root:{
        height:'100%',
        "& .mscb-outside-card":{
            height:"100%",
            "& .mscb-outside-card-content":{
                height:"100% !important",
                minHeight:"80vh"
            }
        },
    },
}))
export default FormTreeviewStyle