import { makeStyles } from "@mui/styles";

const NewPropertyStyle = makeStyles(() => ({
    root: {
        "& .textareaInformation": {
         "& textarea" : {
                minHeight: "234px!important",
            }
        },
        "& .textareaTitleName": {
            "& textarea" : {
                minHeight: "132!important",
            }
        },
       
        "& .informationProperty": {
            textTransform: 'uppercase',
            color: '#1825aa',
            fontWeight: 500,
            fontSize: '18px'
        },
        "& .button-close": {
            color: '#eb0029',
            fontWeight: 300,
            fontSize: '30px',
            display: 'inline-block',
            float: 'right',
            padding: '0px',
            minWidth:'0px'

        },
        '& .add-group-system_select': {
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
           minWidth: 1200,
        backgroundColor: 'white',
        border: 'none',
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
               
            },
            button: {
                border: "none",
                color: '#1825aa',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                cursor:"pointer",
                fontSize: "14px",
                "& svg": {
                    marginRight: 5,
                    marginTop:5
                } 
            }
}));
export default NewPropertyStyle;
