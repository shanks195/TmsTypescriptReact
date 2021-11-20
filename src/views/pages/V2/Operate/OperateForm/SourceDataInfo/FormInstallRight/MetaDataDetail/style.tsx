import { makeStyles } from '@mui/styles';


const MetaDataDetailStyle = makeStyles(()=>({
    root:{
        paddingLeft: '30px',
        
        '& .title': {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--mscb-primary)',
        },
        '& .title::before': {
            fontSize: '8px !important',
            content: "ss",
            width: '7px !important',
            height: '7px !important',
            // margin: 5px 6px 5px 0,
            backgroundColor: '#1825aa !important',
            color: '#1825aa !important',
        },
        '& .action':{

            '& .icon-reload':{
                width: '36px',
                height: '36px',
                margin:' 0 12px',
                padding: '8px 9px 7px',
                backgroundColor: '#e5e8f9',
                marginRight: 0,
                cursor: 'pointer',

                '& svg':{
                    fontSize: '21px',
                    color: '#1825aa',
                }
            },

            '& .icon-save':{
                width: '36px',
                height: '36px',
                margin:' 0 12px',
                padding: '8px 9px 7px',
                backgroundColor: '#caefd3',
                marginRight: 0,
                cursor: 'pointer',

                '& svg':{
                    fontSize: '21px',
                    color: '#069549',
                }
            },

            '& .icon-delete':{
                width: '36px',
                height: '36px',
                margin:' 0 12px',
                padding: '8px 9px 7px',
                backgroundColor: '#fbd4d6',
                marginRight: 0,
                cursor: 'pointer',
                
                '& svg':{
                    fontSize: '21px',
                    color: '#eb0029',
                }
            }
        },
        "& .histoy-system":{
            paddingTop: '21px !important'
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
        '& label': {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--mscb-secondary) !important'
        },
        '& input':{ 
            padding: '0 !important'
        }
    },
    checkBox:{
        "& .MuiFormControlLabel-label":{
            fontSize: '14px',
            color:"var(--mscb-secondary)"
        }
    },
    container: {
        zIndex:99,
        height: '547.5px',
        overscrollBehavior: 'none',
        scrollBehavior:'auto',
        '&::-webkit-scrollbar': {
            width: '6px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: "#d7d8e4",
            borderRadius: '20px'
        },
        '&::-webkit-scrollbar-track': {
            marginTop: '10px'
        }
    },
})) as Function;

export default MetaDataDetailStyle;