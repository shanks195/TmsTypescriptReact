import { makeStyles } from "@mui/styles";

const outsideStyle = makeStyles(() => ({
  root: {

  },
  label: {
    display: 'inline-flex',
    height: '40px',
    lineHeight: '40px',
    padding: '0 16px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.06)',
    fontSize: '16px',
    fontWeight: 500
  },
  extra: {
    
  },
  content: {
    
    padding: '16px'
  }
})) as Function;

export default outsideStyle;