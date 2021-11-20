import { makeStyles } from "@mui/styles";

const metadataTableStyle = makeStyles(() => ({
    root: {
        position: 'relative',
        '& .card-metadata-list': {

            '& .mscb-metadata-list-title': {
                fontSize: '18px',
                fontWeight: 'bold'
            },

            '& .mscb-metadata-list-status': {
                alignItems: 'center',
                paddingBottom: '8px',
                '& .mscb-metadata-status-activate_title': {
                    paddingLeft: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    '& .mscb-metadata-status-activate-icon': {
                        marginRight: '6px',
                        color: '#1a9b06',
                    },
                },
                '& .mscb-metadata-status-stop': {
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '16px',
                    marginLeft: '22px',
                    borderLeft: '2px solid #EBEBEB',
                    height: '16px',
                    '& .mscb-metadata-status-stop-icon': {
                        marginRight: '6px',
                        color: '#eb0029',
                    },
                }
            }
        },
        '& .mscb-metadata-search-bar': {
            position: 'absolute',
            zIndex: 3,
            top: 0,
            left: '211px',
            backgroundColor: '#426FE9',
            padding: '5px 9px',
            height: '40px',
            width: '272px',
            '& .input-search': {
                fontStyle: 'italic',
                fontSize: '16px',
                lineHeight: '1.31',
            },
            '& .MuiInputBase-input': {
                width: '220px',
                height: '30px',
            },
            '& .btn-search': {
                border: 'none',
                backgroundColor: 'transparent',
                marginLeft: '5px'
            }
        },
        '& .add-new-button': {
            position: 'absolute',
            right: 0,
            top: '4px',
            zIndex: 1,
            minWidth: '113px',
            borderRadius: 0,
            backgroundColor: 'var(--mscb-primary)',
            color: '#fff',
        }
    }
})) as Function;

export default metadataTableStyle;