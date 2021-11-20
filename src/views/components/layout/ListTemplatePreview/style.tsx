import { makeStyles } from "@mui/styles";

const ListTemplateStyle = makeStyles(() => ({
  root: {
    height: '100% !important',

    '& .MuiTreeItem-root': {

      '& .MuiCollapse-root': {

        marginLeft: '25px',

        // '& .MuiCollapse-wrapperInner': {

        // },

      },

      '& .MuiTreeItem-content': {

        height: '36px',
        borderBottom: 'solid 1px #9ea7ff',
        backgroundColor: 'unset',
        padding: '0px',

        '& .MuiTreeItem-label': {

          paddingLeft: 0,

          '& .tree-label': {

            '& .MuiTypography-root': {

              textTransform: 'uppercase',
              fontSize: 14,
              fontWeight: 500,
              color: '#1825aa',

            },

          },

        },

        '&:hover': {

          '& .MuiTreeItem-content': {

            backgroundColor: 'unset',

          },

        },

      },

      '& .Mui-selected': {

        '&:hover': {

          '& .MuiTreeItem-content': {

            backgroundColor: 'unset',

          },

        },

        '&.Mui-focused': {

          backgroundColor: 'unset !important',
  
        },

        '& .MuiTreeItem-label': {

          '& .MuiTypography-root': {

            color: 'red !important',

          },

        },

      },

    }
  },
  subchildlist: {



  },
  subchilditem: {

    '& .MuiTreeItem-content': {
      borderBottom: 'unset !important',
      height: 'auto !important',

      '&.Mui-selected': {

        '&:hover': {
          backgroundColor: 'unset',
        },

        '& .MuiTreeItem-label': {

          '& .tree-label': {
  
            '& .folderImg': {
  
              '& svg': {
  
                color: '#1825aa',
  
              },
  
            },
  
            '& .MuiTypography-root': {
  
              color: '#1825aa !important',
  
            }
  
          }
  
        }

      },

      '& .MuiTreeItem-label': {

        '& .tree-label': {
          alignItems: 'flex-start',
          padding: '6px 0',

          '& .folderImg': {

            '& svg': {

              fontSize: '18px',
              marginRight: '6px',
              color: '#353535',

            },

          },

          '& .MuiTypography-root': {

            textTransform: 'none !important',
            color: '#353535 !important',

          }

        }

      }

    }

  },
}));

export default ListTemplateStyle;