import { makeStyles } from "@mui/styles";

const MetaDataList = makeStyles(() => ({
    root:{
        // '& .scroll-container':{
        // '& .wh-full':{
        //     '& .MuiAvatar-root:not(.ava-root)':{
        //         color: '#707070'
        //     },
        //     '& .wh-full > .wh-full':{
        //         boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)'
        //     }
        // }
        '& .mscb-outside-card-content': {
            padding: 0,
            height: '480px',
            overflow: 'auto',
            '& li': {
                height: 40,
                borderRight: 0,
                borderLeft: 0
            }
        },
    }
}));

export default MetaDataList;