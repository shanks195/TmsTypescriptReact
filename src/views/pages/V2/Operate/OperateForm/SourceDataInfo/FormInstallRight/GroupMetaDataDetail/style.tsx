import { makeStyles} from '@mui/styles';

const GroupMetaDataDetailSyle = makeStyles(()=>({
    root:{
        paddingLeft: '30px',
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
        },
        "& .mscb-scroll-bar":{
            maxHeight:"400px",
            overflowY:"scroll",
            '&::-webkit-scrollbar': {
                width: '5px',
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '20px',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                backgroundColor: '#d5d5d5',
            },
        },
        
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
})) as Function;

export default GroupMetaDataDetailSyle;