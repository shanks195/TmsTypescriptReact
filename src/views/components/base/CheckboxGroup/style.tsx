import { makeStyles } from "@mui/styles";

const checkGroupStyle = makeStyles(() => ({
  rootAll: {
    '& .checboxGroup': {
      '& .label-all': {
        fontWeight: 'bold'
      },
      '& .checkbox-children': {
        marginLeft: '30px',
        display: 'flex',
        flexDirection: 'column'
      },
      '& .MuiFormControlLabel-root': {
        padding: '4px 0'
      },
    },
  }
})) as Function;

export default checkGroupStyle;