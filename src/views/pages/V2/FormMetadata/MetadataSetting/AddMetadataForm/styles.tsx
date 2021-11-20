import { makeStyles } from "@mui/styles";

const metadataAddNewStyle = makeStyles(() => ({
    root: {
        '& .add-metadata-form-action':{
            display: "flex",
            justifyContent: "flex-end",
            borderTop: '2px solid #EAEAEA',
            padding: '25px 0 158px 0',
            marginTop: '25px',
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
        }
    },
})) as Function;

export default metadataAddNewStyle;
