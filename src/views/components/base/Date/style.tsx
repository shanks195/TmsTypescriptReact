import { makeStyles } from '@mui/styles';
const DateComponentStyle= makeStyles(()=>({
    root: {
        '& .MuiFormControl-root': {

            '& .MuiOutlinedInput-root': {

                '& .MuiOutlinedInput-input': {
                    paddingRight: '0px !important',
                },

                '& .MuiInputAdornment-root': {

                    '& .MuiButtonBase-root ': {
                        paddingLeft: 0,
                    }

                }

            }

        }
        ,
        '& .MuiOutlinedInput-root': {
            height: 'auto',
            maxHeight: '40px',
            marginTop: '2px',
        },
        '& .MuiCalendarPicker-root ': {
            left:'20% !important'
        },
        '& input.MuiOutlinedInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd': {
            fontSize: '14px',
        },
        '& button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium': {
            color: 'var(--mscb-primary)',
            fontSize: '16px',
        }
    }
}))
export default DateComponentStyle