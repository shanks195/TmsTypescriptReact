import { makeStyles } from '@mui/styles';

const TableApiStyle= makeStyles(()=>({
  root:{
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
    }
  },
  radio:{
    '& svg':{
        backgroundColor: '#1825aa',
        borderRadius:'50%',
        color: '#FFF !important',
        padding: '1px',
  }
}
}))
export default TableApiStyle