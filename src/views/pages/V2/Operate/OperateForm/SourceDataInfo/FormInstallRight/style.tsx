import { makeStyles } from '@mui/styles';

const DateTimeStyle= makeStyles(()=>({
    root: {
        paddingTop: '25px',
        '& .form-metadata-list': {
            // height: '100%'
        },
        "& .meta-data-setting":{
            paddingLeft: '30px'
        },
        '& .title': {
            position: 'relative',
            marginBottom: '0',
            paddingLeft: '13px',
            'text-transform': 'uppercase',
            'font-size': '14px',
            'font-weight': 500,
            color: 'var(--mscb-primary)',
            '&::before': {
                position: 'absolute',
                left: 0,
                top: '30%',
                width: '7px',
                height: '7px',
                content: '""',
                'background-color': '#1825aa'
            }
        }
    },

    input: {
        '& label': {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--mscb-secondary) !important'
        },
        '& input:disabled': {
            color: 'var(--mscb-secondary) !important',
            fontWeight: 'unset',
        },
    },

    autocomplete:{
        '& input':{
            paddingLeft: '30px',
            paddingTop: '25px'
        }
    }
}))
export default DateTimeStyle