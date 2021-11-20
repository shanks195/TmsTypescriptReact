import { makeStyles } from "@mui/styles";

const dataTableStyle = makeStyles(() => ({
    root: {
        // height: '648px',
        '& .mscb-table-groupForm': {
            height: '720px',
            '& th, & td': {
               
                padding: '11.5px 10px 11px 10px',
                maxHeight: '41.5px',
                borderBottom: 'solid 1px #d5d5d5',
            },
            '& th': {
                color: 'var(--mscb-primary)',
                fontSize: '16px',
                borderBottom: '1px solid #353535',
                textTransform:'uppercase',
            },
            "& .font-medium": {
                fontWeight:"500!important",
            },
            '& .td-color': {
                color: 'var(--mscb-primary) !important',
                '& a': {
                    textDecoration: 'underline',
                }
            },
            '& td': {
                color:"#0c0c0c",
                '& .MuiButton-text': {
                    padding: '0px',
                    justifyContent: 'flex-end',
                    minWidth: '0px',
                },
                '& .table-col-status-stop':{
                    color:'#eb0029'
                },
                '& .table-col-status-activate':{
                    color:'#1a9b06'
                }
            },
        },
        '& .templatedata-paging': {
            paddingTop: '20px'
          },
    }
})) as Function;

export default dataTableStyle;