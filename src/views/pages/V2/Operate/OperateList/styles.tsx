import { makeStyles } from "@mui/styles";

const FormReviewStyle = makeStyles(() => ({
  root: {
    height: '100%',
  },

  selectTop: {

    '& .MuiFormControl-root': {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: "40px",
      zIndex: "1000",
      width: "auto",
      left:"64px",
  
      "& .MuiTextField-root": {

        "& .MuiInputBase-colorPrimary": {

          "& svg": {
            color:"white !important",
            // right:"5px",

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
    height: 'calc(100% - 24px)',

    '& .mscb-outside-card-content': {

      height: '100%',

    },

  }
}));
export default FormReviewStyle;
