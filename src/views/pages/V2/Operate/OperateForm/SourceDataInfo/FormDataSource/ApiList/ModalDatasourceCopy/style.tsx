import { makeStyles } from "@mui/styles";

const ModalDatasourceCopyStyle = makeStyles(() => ({
  root: {
    width: "100%",
    "& .border-table-cell-td": {
      border: "1px solid #707070 !important",
      padding:"0 16px",

      "& .td-radio":{
          alignItems:"center",

          "& .MuiFormControlLabel-root":{
              marginRight:"0"
          }
      }
    },

    "& .table-name":{
      color: "var(--mscb-secondary)",
      fontSize: '14px',
      fontWeight: 500
    }, 

    "& .border-table-cell-th": {
      border: "1px solid #707070 !important",
      padding:"10px ",
      color: "var(--mscb-primary)"
    },

    "& .circle-bg": {
      width: "105px",
      height: "105px",
      backdropFilter: "blur(50px)",
      backgroundColor: "rgba(246, 31, 31, 0.1)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& svg": {
        width: "50%",
        height: "50%",
        color: "#eb0029",
      },
    },

    "& .search-bar": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border:"1px solid #d5d5d5",
      backgroundColor:"#ffffff",

      "& .search-icon":{
          color:"#1825aa",
          marginLeft:"10px"
      },

      "& .MuiInputBase-colorPrimary":{
          backgroundColor:"#ffffff !important"
      }
    },

    '& .ds-title':{
      paddingBottom: 0
    },

    '& .ds-content':{
      paddingTop: 0
    }
  },
  radio:{
    '& svg':{
        backgroundColor: '#1825aa',
        borderRadius:'50%',
        color: '#FFF !important',
        padding: '1px',
    }
  },

  action:{
    paddingRight: '24px !important',
    paddingBottom: '25px !important',
    paddingTop: '0 !important',

    '& button':{
        padding: '9px 36px 9px 37px',
        borderRadius: 'unset !important',
    },

    '& .btn__cancel':{
        backgroundColor: '#f61f1f',
        marginRight: '18px',
        height: '36px', 
        width: '99px',
    },

    '& .btn__save':{
        height: '36px', 
        width: '99px',
    }
  }
}));
export default ModalDatasourceCopyStyle;
