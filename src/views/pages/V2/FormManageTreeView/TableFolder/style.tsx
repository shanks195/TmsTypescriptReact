import { makeStyles } from "@mui/styles";

const TableFolderStyle = makeStyles(()=>({
    root:{
        "& .MuiTableCell-root":{
            // padding:"0 !important",
            margin:'0 !important'
        },
        "& .action-icon":{
            padding:"0 5px",
            cursor:"pointer"
        },
       
        "& .table-header":{
            "& .cell-head":{
                padding:"3px",
                color:"var(--mscb-primary)",
                fontSize:"16px",
                borderBottom:"1px solid #353535",
                "& .action-icon":{
                    padding:"0 5px",
                }
            }
        },
        "& .table-row":{
            "& .cell-body":{
                padding:"3px",
                "& .cell-folder":{
                    color:"var(--mscb-primary)",
                    fontWeight:500,
                    fontSize:"14px"
                },
                
            },
            "& .cell-body-parent":{
                paddingLeft:"23px",
                "& .cell-folder":{
                    color:"var(--mscb-primary)",
                    fontWeight:500,
                    fontSize:"14px"
                },
            }
        },
        "& .table-row-child":{
            "& .cell-body-child":{
                padding:"3px",
                "& .cell-folder-child":{
                    color:"var(--mscb-black)",
                    fontWeight:500,
                    fontSize:"14px"
                },
                
            },
            "& .cell-body-folder":{
                paddingLeft:"40px"
            },
            
        },
        "& .collapse-icon":{
            padding:"0",
            width:"20px",
            height:"20px",
            // marginRight:"5px",
            color:"var(--mscb-black)",
            "& svg":{
                width:"100%"
            }
        },
    }
}))
export default TableFolderStyle