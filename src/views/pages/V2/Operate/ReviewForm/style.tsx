import { makeStyles } from "@mui/styles";

const reviewFormStyle = makeStyles(() => ({
  root: {
    position: 'relative',

    '& .mscb-form-search-bar':{
      position: 'absolute',
      zIndex: 3,
      top: 0,
      left: '165px',
      backgroundColor: '#426FE9',
      padding: '5px 9px',
      height: '40px',
      width: '272px',

      '& .MuiInputBase-input':{
        width: '220px',
        height: '30px',
      },

      '& .btn-search':{
        border: 'none',
        backgroundColor: 'transparent',
        marginLeft: '9px',
        minWidth: '35px'
      }

    },
    '& .btn-page': {
      marginBottom: '16px',
    },
    '& .col-pdf': {
      height: '550px',
      overflow: 'scroll',
    },

  },

  selectTop: {

    height: '820px',

    '& .MuiFormControl-root': {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "40px",
      zIndex: "1000",
      width: "auto",
      left:"60px",
  
      "& .MuiTextField-root": {

        "& .MuiInputBase-colorPrimary": {

          "& svg": {
            color:"white !important",
          }
        }

      },

      "& .MuiSelect-select": {
        backgroundColor:"#1825aa !important",
        color:"#ffff",
        height:"40px",
        width: "150px",
        textTransform:"uppercase",
        lineHeight:"40px"

      }

    }
  },
  list: {

    '& .mscb-outside-card-content': {
      height: '100%',
    }

  },
})) as Function;

export default reviewFormStyle;