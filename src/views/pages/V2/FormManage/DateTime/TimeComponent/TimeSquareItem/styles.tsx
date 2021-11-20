import { makeStyles } from '@mui/styles';

const timeSquareStyle= makeStyles(()=>({
    root: {
        '& .time-square-box': {
            textAlign: 'center',
            '& .time-square-input': {
                // paddingLeft:'10px',
                textAlign: 'center',
                fontSize:'20px',
                width: '50px',
                height: '50px',
                border: '1px solid #1E93EC',
                boxShadow: '0 3px 6px 0 rgba(11, 115, 206, 0.34)'
            },
            '& .time-square-input:focus': {
                outline:'none',
            }
        },
       '& .up-button-box':{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            '& .up-btn':{
                padding: 0
            }
        },
        '& .down-button-box':{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            '& .down-btn':{
                padding: 0
            }
        },
    }
}))
export default timeSquareStyle