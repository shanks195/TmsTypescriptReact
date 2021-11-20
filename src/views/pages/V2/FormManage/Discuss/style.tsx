import { makeStyles } from "@mui/styles";
import theme from "app/theme";

const discussStyle= makeStyles(() => ({

  root: {
 
      '&::-webkit-scrollbar': {
        backgroundColor:'white',
      },
      // height:'100vh',
      overflowX:'hidden',
      overflowY:'auto',
      '& .mscb-tab-history-title':{
 
      },
      '& .MuiTab-root':{
        width: '50%'
      },
      '& .MuiPaper-root': {
        width:'100%',
        boxShadow:'none',
      },
      '& .MuiAppBar-colorDefault': {
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: 'white!important',
        boxShadow: 'none!important',
        
      },
      '& .MuiBox-root-20': {
        height:'79vh',
      },
      '& .MuiTabs-scroller':{
        padding:'0 24px 0 24px',
        '& .MuiTabs-flexContainer':{
          borderBottom: '1px solid #d8d8d8'
        }
      },
      backgroundColor: theme.palette.background.paper,
    }
})) as Function;

export default discussStyle ;