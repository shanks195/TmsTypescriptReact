import { makeStyles } from "@mui/styles";


const addNewGroupStyle = makeStyles(() => ({
    root: {
        '& .add-group-system_select':{
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
        '& .form-add-group-action':{
            display: "flex",
            justifyContent: "flex-end",
            borderTop: '2px solid #EAEAEA',
            padding: '25px 0 15px 0',
            marginTop: '15px',
            '& .add-cancel-box':{
                '& .cancel-btn':{
                    minWidth: '99px',
                    borderRadius: 0,
                    backgroundColor: 'var(--mscb-danger)'
                }
            },
            '& .add-save-box':{
                '& .save-btn':{
                    minWidth: '99px',
                    borderRadius: 0,
                    marginLeft: '18px',
                    backgroundColor: 'var(--mscb-primary)'
                }
            }
        },
        '& .MuiTypography-subtitle1':{
            fontWeight: '500'
        },
    }
    
    
})) as Function;

export default addNewGroupStyle;