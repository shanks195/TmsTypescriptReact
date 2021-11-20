import { makeStyles } from "@mui/styles";

const ToggleStyle = makeStyles(() => ({

    root: {
        paddingLeft: '30px',
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-on-off-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-on-off-label':{
            padding: '5px 0 10px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
       
    }

})) as Function;

export default ToggleStyle ;