import { makeStyles } from "@mui/styles";

const formTableStyle = makeStyles(() => ({
    root: {
        position: 'relative',
        height: 'calc(100% - 24px) !important',

        '& .mscb-outside-card-content': {
            height: '100%',
        },

        '& .card-form-list':{
            height: '100%',
            '& .mscb-form-list-status':{
                alignItems: 'center',
                paddingBottom: '15px',
                '& .mscb-form-status-activate':{
                    paddingLeft: '16px'
                },
                '& .mscb-form-status-stop':{
                    paddingLeft: '16px',
                    marginLeft: '22px',
                    borderLeft: '2px solid #EBEBEB'
                }
            }
        },
        '& .mscb-form-search-bar':{
            position: 'absolute',
            zIndex: 3,
            top: 0,
            left: '107px',
            backgroundColor: '#426FE9',
            padding: '5px 9px',
            height: '40px',
            width: '272px',
            '& .MuiInputBase-input':{
                width: '220px',
                height: '30px',
            },
            '& .btn-search':{
                border: 'none',
                backgroundColor: 'transparent',
                marginLeft: '9px',
                minWidth: '35px'
            }
        },
        '& .add-new-button':{
            position: 'absolute',
            right: 0,
            top: '4px',
            zIndex: 1,
            minWidth: '113px',
            height: '40px',
            borderRadius: 0,
            backgroundColor: 'var(--mscb-primary)',
            color: '#fff',
        },
        '& .mscb-form-icon-box':{
            position: 'absolute',
            backgroundColor: '#fff',
            top: '3px',
            right: '113px',
            width: '40px',
            height: '40px',
            zIndex: 2,
        },
        '& .mscb-form-toolbar-table':{
            '& .border-right': {
                margin: '0 8px',
                width: 1,
                height: '70%',
                backgroundColor: '#d5d5d5',
            },

            '& .mscb-toolbar-sort-box':{
                '& .MuiSelect-select': {
                    minWidth: '120px',
                    backgroundColor: '#fff !important'
                },
                '& .MuiSvgIcon-root': {
                    marginRight: '0px',
                }
            },
            '& .mscb-toolbar-label-box':{
                padding: '0 10px 0 15px'
            },
            '& .mscb-toolbar-picker-box':{
                maxWidth: '134px',
                '& .MuiInputBase-formControl':{
                    borderRadius: 0,
                    backgroundColor: '#F2F3F9',
                    height: '36px'
                },
                '& .MuiInputBase-input':{
                    fontSize: '14px',
                    paddingLeft: '8px',
                },
            },
        }
    }

})) as Function;

export default formTableStyle;