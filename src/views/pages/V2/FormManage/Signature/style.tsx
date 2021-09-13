import { makeStyles } from "@mui/styles";
import sign from "assets/images/bg/chu_ky.svg";
import up from "assets/images/bg/upload_sign_image.png";

const signStyle = makeStyles(() => ({

    rootDrop: {
        '& .contain-drop': {
            height: '100%',
            overflow: 'auto'
        },
        '& .containers': {
            transform: 'translateY(-100%)'
        },
        '& .drop-containers': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            height: '250px',
            border: '4px #edeef0',
            marginTop: '250px',
            backgroundColor: '#e6eaf3'
        },
        '& .drop-message': {
            textAlign: 'center',
            color: '#4aa1f3',
            fontFamily: 'Arial',
            fontSize: '20px'
        },
        '& .upload-icon': {
            width: '140px',
            height: '160px',
            background: `url(${up}) no-repeat center center`,
            backgroundSize: '100%',
            textAlign: 'center',
            margin: '0 auto',
            paddingTop: '30px',
            '& svg': {
                fontSize: '2.8cm'
            }
        },
        '& .file-input': {
            display: 'none'
        },
        '& .file-display-containers': {
            position: 'fixed',
            width: '100%'
        },
        '& .file-status-bar': {
            width: '100%',
            verticalAlign: 'top',
            marginTop: '10px',
            marginBottom: '20px',
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
        marginLeft: '10px',
        '& .signa-row': {
            '& .title': {
                fontSize: '16px',
                fontWeight: 'bold'
            },
            '& .label-signa': {
                width: '100%',
                fontWeight: 'bold',
                fontSize: '15px',
                color: 'rgb(24, 24, 160)',
                marginTop: '15px',
                paddingBottom: '10px !important'
            },
            '& .title-rule': {
                fontSize: '16px',
                fontWeight: 'bold'
            },
            '& .check-format': {
                display: 'inline-flex',
                verticalAlign: '-1px',
                flexDirection: 'column',
                marginTop: '-35px'
            },
        },

    }

})) as Function;

export default signStyle;