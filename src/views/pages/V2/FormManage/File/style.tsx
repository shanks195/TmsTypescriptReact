import { makeStyles } from '@mui/styles';
const formManageFileStyle= makeStyles(()=>({
    fileStyle:{
        padding:"0 30px",
        "& .file-title-header":{
           color:"#353535",
           fontSize:"16px",
        },
        "& .attach-file":{
            "& >div":{
               "& >div":{
                display:"flex",
                flexDirection:"column-reverse"
               }
            }
        },
        "& .file-title":{
            fontSize:"15px",
            fontWeight:500,
            color:"#1825aa"
        },
        "& .file-condition":{
            "& .condition-checkbox":{
                width:'50%',
                "& label":{
                    margin:0,
                    width:"50%"
                }
            }
        }
    }
}))
export default formManageFileStyle