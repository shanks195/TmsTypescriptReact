import { makeStyles } from "@mui/styles";

const markdownStyle = makeStyles(() => ({
  "@global": {
    '.markdown-box': {
      '& table': {
        width: '100%',
        borderSpacing: 0,
        cellPadding: 0,
        margin: '16px 0',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

        '& thead': {
          '& tr': {
            '& th': {
              backgroundColor: '#b8daff',

              '&::first-child': {
                borderTopLeftRadius: '4px',
              },
              '&::last-child': {
                borderTopRightRadius: '4px',
              }
            }
          }
        },

        '& tbody': {
          '& tr:nth-of-type(odd)': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
          }
        },

        '& th, & td': {
          padding: '16px',
          borderBottom: '1px solid rgba(224, 224, 224, 1)'
        }
      },

      '& code:not(.hljs)': {
        color: '#d63384',
        backgroundColor: 'rgba(175, 184, 193, 0.2)',
        borderRadius: '2px',
        padding: '2px 5px'
      },

      '& details': {
        '& summary': {
          fontSize: '20px',
          fontWeight: 'bold',
          borderBottom: '1px solid #dfdfdf',
          cursor: 'pointer',
          color: 'var(--mscb-primary)'
        },
        '& > div': {
          padding: '20px'
        }
      }
    }
  }
})) as Function;

export default markdownStyle;