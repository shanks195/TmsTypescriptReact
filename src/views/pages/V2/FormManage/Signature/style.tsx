import { makeStyles } from "@mui/styles";
import sign from "assets/images/bg/chu_ky.svg";
import up from "assets/images/bg/signature-upload-logo.png";

const signStyle = makeStyles(() => ({
    rootDrop: {
        '& .contain-drop': {
            // height: '400px',
            width: '96%'
        },
        '& .containers': {
            // transform: 'translateY(-100%)'
        },
        '& .drop-containers': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            height: '250px',
            border: '4px #edeef0',
            // marginTop: '250px',
            backgroundColor: '#f2f5ff',
            width: '100%'
        },
        '& .drop-message': {
            textAlign: 'center',
            color: '#4aa1f3',
            fontFamily: 'Arial',
            fontSize: '20px'
        },
        '& .upload-icon': {
            width: '140px',
            height: '128px',
            background: `url(${up}) no-repeat center center`,
            backgroundSize: '100%',
            textAlign: 'center',
            margin: '0 auto',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
            // paddingTop: '30px',
            '& svg': {
                fontSize: '2.8cm'
            }
        },
        '& .file-input': {
            display: 'none'
        },
        '& .file-display-containers': {
            // position: 'fixed',
            width: '100%',
            marginTop: '28px',
            marginBottom: '20px',
        },
        '& .file-status-bar': {
            width: '100%',
            verticalAlign: 'top',
            marginTop: '10px',
            marginBottom: '0',
            position: 'relative',
            lineHeight: '50px',
            height: '50px'
        },
        '& .file-type-logo': {
            width: '28px',
            height: '45px',
            background: `url(${sign}) no-repeat center center`,
            backgroundSize: '100%',
            position: 'absolute'
        },
        '& .file-name': {
            display: 'inline-block',
            verticalAlign: 'top',
            marginLeft: '50px'
        },
        '& .file-remove': {
            position: 'absolute',
            top: '20px',
            right: '10px',
            lineHeight: '15px',
            cursor: 'pointer',
            color: 'rgb(0, 183, 255)'
        },
    },
    mainRoot: {
        paddingLeft:"30px",
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-signature-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },'& .mscb-signature-condition-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-signature-label':{
            padding: '0',
            marginBottom: '14px',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        '& .signa-row': {
            '& .check-format': {
                display: 'inline-flex',
                verticalAlign: '-1px',
                flexDirection: 'column',
                marginTop: '-35px',
                '& span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label': {
                    fontSize: '14px',
                }
            },
        },

    }

})) as Function;

export default signStyle;