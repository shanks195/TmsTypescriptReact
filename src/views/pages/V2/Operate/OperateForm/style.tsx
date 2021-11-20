import { makeStyles } from "@mui/styles";

const operateStyle = makeStyles(() => ({

    rootOper: {
        '& .MuiPaper-root': {
            width: '100%',
            boxShadow: 'none',
            borderBottom: '1px solid #f0f0f0'
        },
        '& .mscb-outside-card': {
            width: '100%'
        },
        '& .tms-button-bar-legal-info': {
            paddingTop: '23.5px',
            borderTop: 'solid 2px #d5d5d5',
            width: '100%'
        },
        '& .box-button': {
            backgroundColor: '#fff',
            width: '100%',
            textAlign: 'right',
            marginTop: '10px'
        },
        '& .labelbase': {
            fontWeight: '600'
        },
        '& .buttonBar':{
            paddingBottom:'12px'
        },
        "& .custom-step":{
            justifyContent:"Center",
            paddingTop:"30px",
            paddingBottom:"25px",
            "& .MuiStep-horizontal":{
                padding:"0 88px !important"
            }
        }
    
    },
    hrBorder: {
        paddingTop: '25px',

        '& hr':{
            borderBottom: "1px solid #d5d5d5",
            borderTop:'none'
        }
    },

})) as Function;

export default operateStyle;