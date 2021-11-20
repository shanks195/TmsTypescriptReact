import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import {MdAddCircle}  from 'react-icons/md';
import clsx from 'clsx';
import NewPropertyStyle from './style';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';
import SelectTypeProperty from 'views/components/layout/SelectTypeProperty';
import TextArea from 'views/components/base/TextArea';
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

// const style = {
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   p: 2,
//   px: 4,
//   pb: 3,
// };
interface NewPropertyProps{

  onClose():void;
}

interface NewPropertyComponent extends FunctionComponent<NewPropertyProps>{}
const  NewProperty:NewPropertyComponent = (props)=> {
  const classes = NewPropertyStyle();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { onClose } = props;
  const { t } = useTranslation();
  const cancelCaption = t('Common.Button.Canceled.Caption');
  const saveCaption = t('Common.Button.Save.Caption');
  const propertyTitle = t('Common.Label.Title.Property');
  const propertyTitleName = t('Common.Label.Title.Name.Property');
  const InformationProperty = t('Common.Label.Inforation.Property');
  const propertyTitleInformation = t('Common.Label.Information.Property.Title');
  const handleSave = () =>{
    // const body = {
    //   code: codeInputRef.current?.getValue() ,
    //   name: nameInputRef.current?.getValue() ,
    //   slug: slugInputRef.current?.getValue() ,
    //   active_flag: statusSelectRef.current?.getValue()?.id ,
    //   parent_id: Number(parentSelectRef.current?.getValue()?.id) 
    // } as IBodyTemplate;
    // if(!is_create && id){
    //   dispatch(fetchUpdateTemplateGroup({
    //     data:body,
    //     id:id
    //   }))
    //   onClose()
    // }
    // else{
    //   dispatch(createTemplateGroup(body))
    //   onClose()
    // }
}

  return (
    <div>
      <button type="button" onClick={handleOpen} className={clsx(classes.button)}>
           <span><MdAddCircle/></span><span>Thêm Tài Sản</span> 
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box className={clsx(classes.root,)}>
        <Grid container >
          <Grid container item xs={12} style={{ paddingBottom: "18px" }}>
              <Grid xs={10} className="informationProperty">
                {InformationProperty}
              </Grid>
              <Grid xs={2}>
                  <Button onClick={onClose} className="button-close" >
                    <IoClose/>
                  </Button>
              </Grid>
          </Grid>
            <Grid item xs={12} style={{ paddingBottom: "18px" }}>
              <h5>1. {propertyTitle}</h5>
              <SelectTypeProperty/>
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: "18px" }}>
              <h5>2. {propertyTitleName}</h5>
              <TextArea className="textareaTitleName"/>
          </Grid>
          <Grid item xs={12} style={{ paddingBottom: "18px" }}>
          <h5>3. {propertyTitleInformation}</h5>
              <TextArea className="textareaInformation"/>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="form-add-group-action">
              <Grid item>
                <Box component="div" className="add-cancel-box">
                  <Button onClick={onClose} variant="contained" className="cancel-btn">
                    {cancelCaption}
                  </Button>
                </Box>
              </Grid>
              <Grid item>
                <Box component="div" className="add-save-box">
                  <Button onClick={handleSave} variant="contained" className="save-btn">
                    {saveCaption}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Box>
      </StyledModal>
    </div>
  );
}
export default NewProperty;