import { makeStyles } from "@mui/styles";
const uploadStyle = makeStyles((attach) => ({
  root: {},

  uploadContainer: {
    "& .file-attachment":{
      color:"#1e93ec",
      textDecoration:"underline",
      cursor:"pointer",
      "& :hover":{
        color:"red",
      }
    },
    "& .drop-containers": {
      padding: "50px",
      textAlign: "center",
      fontSize: "16px",
      fontWeight: 500,
      backgroundColor: "#f3f6ff",
      border: "dashed 1px #1825aa",
      borderRadius: "9px",
      "& .drop-message": {
        "& .message-link": {
          color: "#1e93ec",
          cursor: "pointer",
        },
        "& .upload-icon": {
          color: "#9599c1",
          fontSize: "13px",
          "& .upload-button": {
            marginLeft: "16px",
            backgroundColor: "#4a5fec",
            
          },
        },
      },
    },
  },
  fileInput: {
    display: "none",
  },

  fileDisplayContainers: {
    marginTop: "20px",
    "& .file-status-bar": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .file-info":{
          color:"#0a0723",
          fontSize:"14px",
          width:"50%",
          "& .file-name":{
            fontSize:"14px",
            marginLeft:"10px"

          },
          "& .file-progress":{
              display:"unset",
              "& .capacity":{
                color:"#b8b9d2"
              },

              "& .file-progress-info":{
                  display:"flex",
                  justifyContent:"space-between",
                  padding:"0 10px"
              }
          }
      },
      "& .file-type-logo": {
        width: "50px",
        height: "50px",
        "& svg": {
          width: "100%",
          height: "100%",
        },
      },
      "& .file-remove": {
        cursor:"pointer",
        marginLeft: "auto",
      },
    },
  },
}));

export default uploadStyle;
