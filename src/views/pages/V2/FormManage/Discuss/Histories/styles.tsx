import { makeStyles } from "@mui/styles";


const historyContentStyle= makeStyles(() => ({
    root: {
        "& input": {
            border:"none"
        },
        "& input:focus": {
            outline:"none"
        },
        "& .footer-title": {
            color: '#707070',
            fontWeight: 'normal',
            bottom: '0px',
            position: 'absolute',
            left: '0px',
            border: '1px solid #d8d8d8',
            width: '98%',
            paddingTop: '8px',
            paddingLeft: '15px',
            paddingBottom:'9px'

        },
        paddingBottom: '20px',
        '& .mscb-history-container':{
            '& .mscb-history-date':{
               paddingBottom: '10px',
               borderBottom: '2px solid var(--mscb-gray)'
           },
           '& .mscb-history-info-content':{
               padding: '10px 0',
               '& .mscb-history-info':{
                    "& .history-avatar":{
                        paddingRight: "10px"
                    },
                    '& .history-info':{
                        '& .history-info-date':{
                            '& .MuiTypography-body2':{
                                fontStyle: 'italic',
                            }
                        }
                    }
               },
               '& .mscb-history-id':{
                '& .MuiTypography-subtitle1':{
                    fontWeight: 600,
                }
               }
            },
            '& .mscb-history-note':{
                '& .mscb-history-note-label':{
                    '& .MuiTypography-body2':{
                        fontStyle: 'italic',
                    }
                }
            }
        }
    }
})) as Function;

export default historyContentStyle ;