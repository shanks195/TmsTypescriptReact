// .tms-texteditor-base .ql-container .ql-editor{
//     min-height: 135px;
// }

import { makeStyles } from "@mui/styles";

const textEditorStyle = makeStyles(() => ({
  root: {
    '& .ql-container .ql-editor':{
        minHeight: '135px'
    },
    '& .ql-snow.ql-toolbar button svg':{
        height: '13px'
    }
  },

})) as Function;

export default textEditorStyle;