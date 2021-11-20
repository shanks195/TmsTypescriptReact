import { makeStyles } from "@mui/styles";

const SubMenuListStyle = makeStyles(() => ({
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

  subChild: {

    // backgroundColor: 'red',

  }
}));

export default SubMenuListStyle;