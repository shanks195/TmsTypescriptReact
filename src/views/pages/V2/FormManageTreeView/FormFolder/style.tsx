import { makeStyles } from "@mui/styles";

const FormFolderStyle = makeStyles(() => ({
  root: {
    "& .tree-head": {
      "& .action-icon":{
        marginRight:"8px",
      },
      "& .MuiTreeItem-content": {
        borderBottom: "solid 1px #353535",
        flexDirection: "row-reverse",
        "& .MuiTreeItem-iconContainer": {
          marginBottom: "5px",
          marginRight:"8px",
          width:"18px",
          height:"18px",
          transition:"all 0.5s",
          "& svg":{
            width:"100%",
            height:"100%",
            color:"#eb0029"
          }
        },
        "& .MuiTreeItem-label":{
          "& .tree-label-head":{
            "& p":{
              fontSize:"16px",
              color:"#1825aa",
              fontWeight:500,
              textTransform:"uppercase"
            }
          }
        }
      },
      "& .tree-table-item":{
          "& .MuiTreeItem-content":{
            flexDirection: "row !important",
            position:"relative",
            borderBottom:"1px solid #c6c5d1 !important",
            color:"#0c0c0c",
            "& .MuiTreeItem-iconContainer":{
                position:"absolute",
                left:"9.5%",
                top:"40%",
                "& svg":{
                  color:"var(--mscb-black)"
                }
            },
            "& .MuiTreeItem-label":{
              "& .tree-label-item":{
                padding:"8px 0",

                "& .label-stt":{
                  width:"10%",
                  paddingLeft:"5px"
                },
                "& .label-slug":{
                  width:"25%",
                  fontWeight:500

                },
                "& .label-icon":{
                  width:"35%",
                  display:"flex",
                  alignItems:"center",

                },
                
                "& .label-icon-child":{
                  width:"35%",
                  display:"flex",
                  alignItems:"center",
                  paddingLeft:'3%',
                  "& .label-folder-child":{
                    color:"#353535",
                    fontSize:"14px",
                    fontWeight:500,
                    textTransform:"uppercase",
                    marginTop:"7px"
                  }


                },
                "& .label-name":{
                  fontSize:"14px",
                  fontWeight:500,
                  color:"#353535"

                },
                "& .label-time":{
                  fontSize:"12px",
                  color:"#808080"
                },
                "& .label-action":{
                  width:"15%",
                  textAlign:"right",
                  "& svg":{
                    width:"24px",
                    height:"24px",
                    color:"#1825aa"
                  }

                },
              },
              "& .label-folder":{
                fontSize:"14px",
                color:"#1825aa",
                fontWeight:500,
                textTransform:"uppercase",
                marginTop:"7px"
              }
            }
          },
          "& .Mui-selected":{
            "& .MuiTreeItem-label":{
              "& .tree-label-item":{
                "& .label-icon-child":{
                  "& .label-folder-child":{
                    color:"#eb0029 !important"
                  }
                 }
              }
              
            }
          
          },
      }
    },

    "& .Mui-selected": {
      backgroundColor: "white !important",
    },
    "& .MuiTreeItem-group": {
      marginLeft: "0px !important",
    },
  },
 
}));
export default FormFolderStyle;
