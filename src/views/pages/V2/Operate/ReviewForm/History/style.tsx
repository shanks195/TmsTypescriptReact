import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const HistoryStyle = makeStyles((theme: Theme) => ({
  root: {
    '& .mscb-outside-card-content': {
      height: '240px',
      overflow: 'auto',
      padding: '0 12px',
    },
    '& .list-container': {
      '& .MuiListSubheader-root': {
        margin: 0,
        fontSize: '14px',
        color: "#000",
        fontWeight: 500,
        padding: 0,
        lineHeight: '40px',
      },
      '& .full-name': {
        color: "#000",
        fontSize: '14px'
      },
      '& .MuiListItemSecondaryAction-root': {
        top: "12%",
        '& button': {
          color: 'var(--mscb-primary)',
          fontSize: '14px',
        }
      },
      '& .MuiListItem-container': {
        '& .MuiListItem-root': {
          paddingLeft: 0,
          paddingRight: 30,
        },
        '& .MuiListItemSecondaryAction-root': {
          right: 0
        }
      }
    },
  },
  inline: {
    display: 'inline',
    fontStyle: "italic",
    color: 'var(--mscb-primary)',

  },
  profilehistory: {
    height: "321px",
  },
  owner: {
    '& .MuiListItemText-secondary': {
      transform: 'translate(-15%, 5px)'
    },
    '& .full-name': {
      color: '#000'
    }
  },
  openDate: {
    fontStyle: "italic",
    color: "#707070",
    fontWeight: 300,
    fontSize: "12px",
  },
  content: {
    display: "flex",
    flexWrap: "nowrap",
  },
  scrollbar: {
    scrollBehavior: "auto",
  },

})) as Function;

export default HistoryStyle;
