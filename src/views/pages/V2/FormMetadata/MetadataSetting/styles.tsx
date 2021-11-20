import { makeStyles } from "@mui/styles";

const metadataSettingStyle = makeStyles(() => ({
    root: {
        '& .mscb-discuss-metadata-card':{
            '& .mscb-outside-card-content':{
                padding: 0,
                height:"calc(100% - 40px)"
            }
        },
        "& .mscb-outside-card":{
            height:"100%",
        }
    },
    TextEditor:{

    }
})) as Function;

export default metadataSettingStyle;
