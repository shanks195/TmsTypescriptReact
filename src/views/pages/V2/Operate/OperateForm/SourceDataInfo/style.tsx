import { makeStyles } from "@mui/styles";

const sourceDataStyle = makeStyles(() => ({
    rootSour: {
        // height: '100%',

        '& .MuiInputLabel-root': {
            fontWeight: 'bold'
        },
        '& .btn-prev': {
            '& .btn-next': {
                border: 'none',
                zIndex: '9999999999',
                height: '100%'
            }
        },
        '& .btn-prev-begin': {
            '& .btn-prev-end': {
                border: 'none',
                zIndex: '999999999999',
                height: '100%'
            }
        },
        '& .pdfWrapper': {
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            marginLeft: '15px',
            marginTop: '20px',
            width: '95%',
            height: '97%'
        },
        '& .select-page': {
            width: '92%',
            marginLeft: '9px',
            '& svg':  {
                fontSize: 'small!important'
            }
        },
        '& .btn-page': {
            marginTop: '10px'
        },
        '& .MuiGrid-root' : {
            '& canvas': {
               width: '100%!important'
            }
        }
    }
})) as Function;

export default sourceDataStyle;



