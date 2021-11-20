import { makeStyles } from "@mui/styles";

const btnBarStyle = makeStyles(() => ({
  root: {
    '& .tms-button-bar': {
        textAlign: 'right',
        backgroundColor: 'white',
    },
    '& .tms-btn': {
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        height: '36px',
        minWidth: '99px',
        fontSize: '14px',
        whiteSpace: 'normal',
        textTransform: 'uppercase',
        padding: '10px',
        borderRadius: '0',
        marginLeft: '18px',
        '& svg': {
            fontSize: '10px',
            marginRight: '8px'
        }
    },
    '& .tms-btn:hover': {
        textDecoration: 'none'
    },
    '& .btn-none-case': {
        textDecoration: 'none'
    },
    '& .btn-gray': {
        backgroundColor: '#33375d',
        color: '#ffffff',
        border: '1px solid #33375d'
    },
    '& .btn-gray:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#23263f',
        color: '#23263f'
    },
    '& .btn-gray:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#23263f',
        color: '#23263f'
    },
    '& .btn-red': {
        backgroundColor: '#eb0029',
        color: '#ffffff',
        border: 'solid 1px #eb0029'
    },
    '& .btn-red:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#b6011f',
        color: '#b6011f'
    },
    '& .btn-red:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#b6011f',
        color: '#b6011f'
    },
    '& .btn-green': {
        backgroundColor: '#069549',
        color: '#ffffff',
        border: '1px solid #069549'
    },
    '& .btn-green:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#036832',
        color: '#036832'
    },
    '& .btn-green:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#036832',
        color: '#036832'
    },
    '& .btn-white-bg': {
        backgroundColor: '#ffffff',
        color: '#1825aa',
        border: '1px solid #1825aa'
    },
    '& .btn-white-bg:hover': {
        backgroundColor: '#1825aa',
        color: '#ffffff'
    },
    '& .btn-white-bg:focus': {
        backgroundColor: '#1825aa',
        color: '#ffffff'
    },
    '& .btn-blue': {
        backgroundColor: '#1825aa',
        color: '#ffffff',
        border: 'solid 1px #1825aa'
    },
    '& .btn-blue:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#151f8f',
        color: '#151f8f'
    },
    '& .btn-blue:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#151f8f',
        color: '#151f8f'
    },
    '& .btn-yellow': {
        backgroundColor: '#f8ad08',
        color: '#ffffff',
        border: 'solid 1px #f8ad08'
    },
    '& .btn-yellow:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#c98b05',
        color: '#c98b05'
    },
    '& .btn-yellow:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#c98b05',
        color: '#c98b05'
    },
    '& .btn-organge': {
        backgroundColor: '#f26b04',
        color: '#ffffff',
        border: 'solid 1px #f26b04'
    },
    '& .btn-organge:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#c45704',
        color: '#c45704'
    },
    '& .btn-organge:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#c45704',
        color: '#c45704'
    },
    '& .btn-light-blue': {
        backgroundColor: '#5b6bff',
        color: '#ffffff',
        border: 'solid 1px #5b6bff'
    },
    '& .btn-light-blue:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#515fda',
        color: '#515fda'
    },
    '& .btn-light-blue:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#515fda',
        color: '#515fda'
    },
    '& .btn-dark': {
        backgroundColor: '#7d7d7d',
        color: '#ffffff',
        border: 'solid 1px #7d7d7d'
    },
    '& .btn-dark:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#545454',
        color: '#545454'
    },
    '& .btn-dark:focus': {
        backgroundColor: '#ffffff',
        borderColor: '#545454',
        color: '#545454'
    },
  }
})) as Function;

export default btnBarStyle;