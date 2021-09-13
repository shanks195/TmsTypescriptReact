import { makeStyles } from '@mui/styles';

const langStyle = makeStyles(() => ({
  root: {
    '& .MuiInputBase-root': {
      borderRadius: '18px',
    },
    '& .mscb-flag-icon': {
      marginRight: '8px'
    }
  }
})) as Function;

export default langStyle;