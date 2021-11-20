import { makeStyles } from "@mui/styles";

const formGroupListStyle = makeStyles(() => ({
    root: {
        '& .metadata-list-search-content':{
            
        },
        '& .group-search-system_select':{
            '& .MuiChip-filled':{
                backgroundColor: '#209CEE',
                color: '#fff',
                borderRadius: '2px',
                maxHeight: '25px',
            },
            '& .MuiChip-deleteIcon':{
                fontSize: '15px',
                zIndex: '1'
            },
            '& .MuiChip-label':{
                padding: '0 8px 0 8px'
            },
            '& .MuiSelect-select':{
                minHeight: '36px',
                display: 'flex',
                alignItems: 'center'
            }
        },
        '& .form-group-search-action':{
            display: "flex",
            justifyContent: "flex-end",
            borderTop: '2px solid #EAEAEA',
            padding: '25px 0 0px 0',
            marginTop: '15px',
            '& .search-cancel-box':{
                '& .cancel-btn':{
                    minWidth: '99px',
                    borderRadius: 0,
                    backgroundColor: 'var(--mscb-danger)'
                }
            },
            '& .search-search-box':{
                '& .search-btn':{
                    minWidth: '99px',
                    borderRadius: 0,
                    marginLeft: '18px',
                    backgroundColor: 'var(--mscb-primary)'
                }
            }
        },
        '& .MuiTypography-subtitle1': {
            color: '#6d6d6d',
            fontWeight: '500'
        },
    }
})) as Function;

export default formGroupListStyle;