import { makeStyles } from "@mui/styles";

const wrapperStyle = makeStyles(() => ({

  root: {
    transition: 'all 0.3s ease 0s',
    marginLeft: 'var(--mscb-sidebar-width)',
    width: 'calc(100% - var(--mscb-sidebar-width))'
  },

  wrapper: {
    padding: '30px'
  }

})) as Function;

export default wrapperStyle;