import { makeStyles } from '@mui/styles';
const dateTimeStyle= makeStyles(()=>({
    root: {
        paddingLeft:"30px",
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-date-time-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-data-time-label':{
            padding: '5px 0 10px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        '& .mscb-date-time-box':{
            backgroundColor: '#1E93EC',
            padding: '6px',
            '& .mscb-date-box-label':{
                backgroundColor: '#fff',
                padding:'9px 0',
                '& .date-box-label-icon':{
                    marginRight: '8px',
                    display: 'flex',
                    alignItems: 'center',
                }
            },
            '& .mscb-hour-box-label':{
                backgroundColor: '#fff',
                marginLeft: '6px',
                padding:'9px 0',
                '& .hour-box-label-icon':{
                    marginRight: '8px',
                    display: 'flex',
                    alignItems: 'center',
                }
            }
        },
        '& .mscb-date-time-input-12':{
            padding: '24px 0',
            height: '319px',
            '& .mscb-date-picker-box':{
                maxWidth: '227px',
                '& .MuiInputBase-formControl':{
                    borderRadius: 0,
                    backgroundColor: '#F2F3F9',
                    maxWidth: '220px',
                    height: '36px'
                },
            },
            '& .mscb-time-input-box':{
                paddingLeft: '6px',
                maxWidth: '227px',
                '& .MuiInputBase-formControl':{
                    borderRadius: 0,
                    backgroundColor: '#F2F3F9',
                    maxWidth: '220px',
                },
            },
            
        },
        '& .mscb-date-time-input-24':{
            padding: '24px 0',
            height: '319px',
            '& .mscb-date-picker-box':{
                maxWidth: '227px',
                '& .MuiInputBase-formControl':{
                    borderRadius: 0,
                    backgroundColor: '#F2F3F9',
                    maxWidth: '220px',
                    height: '36px'
                },
            },
            '& .mscb-time-input-box':{
                paddingLeft: '6px',
                maxWidth: '227px',
                '& .MuiInputBase-formControl':{
                    borderRadius: 0,
                    backgroundColor: '#F2F3F9',
                    maxWidth: '220px',
                },
            },
        }
       
    }
}))
export default dateTimeStyle