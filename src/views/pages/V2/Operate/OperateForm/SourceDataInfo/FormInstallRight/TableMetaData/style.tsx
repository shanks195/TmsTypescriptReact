import { makeStyles } from '@mui/styles';

const TableMetaDataStyle = makeStyles(()=>({
  root: {
    "& .table-header":{
        "& .cell-head":{
            padding:"3px",
            color:"var(--mscb-primary)",
            fontSize:"16px",
            borderBottom:"1px solid #353535",
            
            "& .action-icon":{
                padding:"0 5px",
                cursor: "pointer"
            }
        }
    },
    "& .table-row":{
        "& .cell-body":{
            paddingTop: '18px',
            paddingBottom: '16px',
            borderTottom: "solid 1px #c6c5d1",

            "& .action-icon":{
               "& svg":{
                    width: '24px',
                    height: '24px',
                    margin:'0 8px 0 0',
                    objectFit: 'contain',
                    fontSize: '24px',
                    color: '#1825aa'
               }
            }
        }
    },

    '& .td-emty':{
        padding: '55px 15px !important'
    },

    "& .collapse-icon":{
        padding:"0",
        width:"20px",
        height:"20px",
        color:"var(--mscb-black)",
        
        "& svg":{
            width:"100%"
        }
    },

    "& .meta-data-name":{
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--mscb-secondary)'
    },
    "& .meta-data-stt":{
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 'unset !important',
        color: '#333'   
    }
  }
})) as Function;

export default TableMetaDataStyle;