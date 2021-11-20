import { makeStyles } from '@mui/styles';

const gListStyle = makeStyles(() => ({
  root: {
  },
  item: {
    width: '100%',
    height: '50px',
    border: '1px solid #eee'
  },
  active: {
    '& .items.wh-full': {
      boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      '& li': {
        border: 'solid 1px #d5d5d5',
      }
    },
    '& .ava-root': {
      backgroundColor: '#1825aa',
      color: '#ffffff',
    },
    '& .tex-root': {
      color: '#1825aa',
      fontWeight: 'bold',
      '& span': {
        fontWeight: '500'
      }
    }
  },
  total: {
    color: 'blue',
    alignItems: 'center',
    border: '1px solid #eee',
    height: '50px',
    width: '100%',
    fontWeight: 'bold'
    // border: '1px solid #eee',
    // display: 'flex',
    // justifyContent: 'space-between'
  }
})) as Function;

export default gListStyle;