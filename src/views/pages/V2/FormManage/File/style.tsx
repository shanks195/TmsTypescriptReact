import { makeStyles } from '@mui/styles';
const formManageFileStyle= makeStyles(()=>({
    fileStyle:{
        paddingLeft:"30px",
        '& .drop-zone-upload': {
            // '& span.material-icons.notranslate.MuiIcon-root.MuiIcon-colorPrimary.MuiIcon-fontSizeMedium': {
            //     position: 'absolute',
            //     bottom: '400px',
            //     right: '500px',
            //     backgroundColor: 'white',
            //     borderRadius: '50%',
            // },
        },
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-file-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-file-condition-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-file-label':{
            padding: '0',
            marginBottom: '14px',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        "& .attach-file":{
            "& >div":{
               "& >div":{
                display:"flex",
                flexDirection:"column-reverse"
               }
            },
            "& .mscb-upload": {
                marginTop: '-20px',
                marginBottom: '20px',
            }
        },
        "& .file-condition":{
            "& .condition-checkbox":{
                width:'50%',
                marginTop: '-10px',
                marginLeft: '-12px',
                "& .checkbox-children": {
                    marginLeft: '0',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                },
                "& label":{
                    margin:0,
                    width:"50%"
                },
                '& span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label': {
                    fontSize: '14px',
                },
            }
        }
    }
}))
export default formManageFileStyle