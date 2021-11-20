import { makeStyles } from '@mui/styles';

const FormGroupStyle=makeStyles(()=>({
    root:{
            "& .MuiTreeItem-iconContainer":{
                marginRight:"0 !important",
                width:"5px"
            },
            "& .MuiTreeItem-content":{
                padding:"5px 0",
                borderBottom:"1px solid #9ea7ff",
                "& .MuiTreeItem-label":{
                    "& .tree-label":{
                        "& .tree-label-text":{
                            color:"#353535",
                            fontSize:"14px",
                            textTransform:"uppercase",
                            fontWeight:500,
                            marginLeft:"5px",
                            marginTop:"10px",
                            marginBottom:"5px"
                        },
                        // "& .folderImg":{
                        //     marginBottom:"10px",
                           
                        // }
                    }
                },
                "&:hover":{
                    backgroundColor:"white",
                    "& .tree-label":{
                        "& .tree-label-text":{
                            color:"#1825aa !important",
                        }
                    }
                   
                }
            },
            "& .Mui-selected":{
                backgroundColor:"white !important",
            }
        ,
        "& .tree-item-child":{
            "& .Mui-selected":{
                "& .MuiTreeItem-label":{
                    "& .tree-label":{
                        "& .tree-label-text":{
                            color:"#eb0029 !important",
                        }
                    }
                }
            }
        }
    }
}))
export default FormGroupStyle