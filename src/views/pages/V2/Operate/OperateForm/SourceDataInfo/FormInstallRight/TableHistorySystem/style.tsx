import { makeStyles } from '@mui/styles';


const TableHistorySystemStyle= makeStyles(()=>({
  root:{
    paddingTop: "17px",

    "& .log-name":{
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 500,
      color: '#353535'
    },
    "& .log-date":{
      fontFamily: 'Roboto',
      fontSize: '12px',
      fontWeight: 500,
      color: '#808080'
    },

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
  }
}))
export default TableHistorySystemStyle