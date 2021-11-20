import { makeStyles } from "@mui/styles";

const uploadTypesStyle = makeStyles(() => ({
  rootUp: {
    height: '80px',
    '& .contain-drop': {
        height: '200px',
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
        height: '200px',
        border: '4px #edeef0',
        marginTop: '220px',
        backgroundColor: '#eef3ff',
        width: '95%',
    },
    '& .drop-message': {
        textAlign: 'center',
        color: '#4aa1f3',
        fontFamily: 'Arial',
        fontSize: '20px'
    },
    '& .file-input': {
        display: 'none'
    },
    '& .file-display-containers': {
        position: 'fixed',
        width: '95%',
        height: '50%!important'
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
        background: `no-repeat center center`,
        backgroundSize: '100%',
        position: 'absolute',
        '& svg': {
            fontSize: '25px',
            color: 'blue',
            marginTop: '10px',
            marginLeft: '15px'
        }
    },
    '& .file-name': {
        display: 'inline-block',
        verticalAlign: 'top',
        marginLeft: '50px'
    },
    '& .file-remove': {
        position: 'absolute',
        top: '14px',
        right: '10px',
        lineHeight: '15px',
        cursor: 'pointer',
        color: 'rgb(0, 183, 255)',
        '& svg': {
            fontSize: '20px'
        }
    },
  }
})) as Function;

export default uploadTypesStyle;