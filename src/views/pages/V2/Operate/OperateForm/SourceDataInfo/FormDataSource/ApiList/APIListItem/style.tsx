import { makeStyles } from '@mui/styles';


const DetailInfoCheckedStyle = makeStyles(()=>({
    root:{
        marginTop: '9px !important',
        textAlign: 'center',
        width: 'calc(100% + 230px)!important',
        '& .label_name': {
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--mscb-secondary)',
            paddingTop: '6px'
        },

        '& .checked__badge':{
            cursor: 'pointer',

            '& .MuiAvatar-root':{
                backgroundColor: '#d5d5d5',
                cursor: 'pointer',
                
                '& svg':{
                    color: '#707070',
                    fontSize: '30px !important'
                }
            },
            
            '& .MuiBadge-colorInfo':{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#fee8e8',
                color: '#f61f1f',
                cursor: 'pointer',

                '& svg':{
                    fontSize: '14px'
                }
            }
        },

        '& .btn__add':{
            border: '1px solid #1825aa',
            width: '50px',
            height: '50px',

            '& svg':{
                color: "#1825aa !important" 
            }
        },

        '& .btn__add:hover':{
            backgroundColor:' #1825aa',

            '& svg':{
                color: "#FFF !important" 
            }
        }
    },
    noneDelete:{
        '& .MuiBadge-colorInfo':{
            display: 'none'
        }
    },
    center:{
        textAlign: 'center',
    },
    left:{
        textAlign: 'initial',
    },
    active:{
        '& .label_name': {
            color: 'var(--mscb-primary)',
        },

        '& .checked__badge':{

            '& .MuiAvatar-root':{
                backgroundColor: '#1825aa',

                '& svg':{
                    color: '#FFF'
                }
            }
        }
    }

})) as Function;

export default DetailInfoCheckedStyle;