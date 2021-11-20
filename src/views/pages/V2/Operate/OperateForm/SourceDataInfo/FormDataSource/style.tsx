import { makeStyles } from "@mui/styles";
import { border } from "@mui/system";

const mainSourceStyle = makeStyles(() => ({

    rootSource: {
        '& .api-list': {
           paddingBottom: '8px'
        },
        '& .mscb-input': {
            '& label': {
                fontWeight: 'bold !important',
                fontSize: '15px !important'
            }
        },
        '& .author-card': {
            height: 'auto',
            paddingTop: '18px'
        },
        '& .json-card': {
            height: 'auto',
            paddingTop: '18px'
        },
        '& .header-card': {
            height: 'auto',
            paddingTop: '18px'
        },
        "& .coppy-form":{
            padding: '10px 42px',
            marginTop: '10px',
            cursor: 'pointer',
            
            '& svg': {
                color: 'var(--mscb-danger)'
            }
        }
    },
    objectList: {
        "& .ObjectListLabel":{
            border:'unset',
            paddingLeft: "0",
            textDecoration: "unset",
            display: 'flex',

            "& .object-list-label":{
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--mscb-secondary)',
            },

            
            "& .object-list-number":{
                marginTop: 0,
                marginLeft: '2px',
                fontSize: '14px',
                color: "var(--mscb-secondary)",
                lineHeight: "17px"
            }
        },

        '& svg':{
            transform: 'rotate(180deg)',
            fontSize: '18px',
            color:'#FFF'
        },

        '& .object-list-box-name':{
            textDecoration: 'none !important'
        },

        '& .active':{
            '& .object-list-circle':{
                backgroundColor: 'var(--mscb-primary)',
                border: '1px solid var(--mscb-primary) !important'
            },

            '& .object-list-box-name':{
                color: 'var(--mscb-primary) !important'
            },

            '& svg':{
                color:'#FFF',
                backgroundColor: '#FFF'
            },
        }
    },
    cardInside:{
        minHeight: '0!important',
        paddingLeft: '16px',

        "& .legend-content":{
            display: "grid!important",
            paddingRight: "0 !important"
        },

        '& .inline-card':{
            paddingInlineStart: '0!important',
            paddingInlineEnd: '16px!important',
            minHeight: '514px',

            "& .legend-title":{
                fontSize: "14px !important",
                marginInlineStart: '20px'
            },

            "& .legend-content":{
                padding: "12px 0"
            }
        }
    }

})) as Function;

export default mainSourceStyle;