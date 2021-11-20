import { FunctionComponent, useRef } from "react";
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "views/components/base/Input";
import { AiFillPicture } from 'react-icons/ai';
import { RiVideoLine } from 'react-icons/ri';
import { IoIosMusicalNotes } from 'react-icons/io';
import CheckboxGroup, { CheckboxGroupRef } from "views/components/base/CheckboxGroup";
import UploadFileType from "views/components/base/UploadTypes";
import { useTranslation } from 'react-i18next';
import mediaStyle from "./style";
// import mediaAud from "assets/images/bg/media-aud.png";
// import mediaImg from "assets/images/bg/media-img.png";
// import mediaVid from "assets/images/bg/media-vid.png";

interface FormManageMediaProps { }

interface FormManageMediaComponent
  extends FunctionComponent<FormManageMediaProps> { }

const FormManageMedia: FormManageMediaComponent = () => {

  const classes = mediaStyle();
  const imageRef = useRef<CheckboxGroupRef>(null);
  const { t } = useTranslation();
  const titleFormat= t('Common.Input.Format.Title');
  const upImages = t('Pages.Layout.Group.Group.Images');
  const upVideos = t('Pages.Layout.Group.Group.Videos');
  const upAudios = t('Pages.Layout.Group.Group.Audios');
  const titleRule = t('Common.Input.Condition.Title');
  const labelSmall= t('Pages.Layout.Group.Group.TitleSmall');
  const titleSize = t('Pages.Layout.Group.Group.Size');

  const imgOptions = [{ label: "Png", value: "Png", checked: false },
    { label: "Svg", value: "Svg", checked: false },
    { label: "Jpg", value: "Jpg", checked: false },
    { label: "HEIC", value: "HEIC", checked: false }];

  const vidOptions = [{ label: "Mp4", value: "Mp4", checked: false },
    { label: "WMV", value: "WMV", checked: false },
    { label: "F4V", value: "F4V", checked: false },
    { label: "AVI", value: "AVI", checked: false },
    { label: "WEBM", value: "WEBM", checked: false }];

  const audOptions = [{ label: "Mp3", value: "Mp3", checked: false },
    { label: "Wav", value: "Wav", checked: false }];

  return (
    <Grid container className={clsx(classes.root, 'mscb-input-type-media')}>
      <Grid item xs={12}>
        <Grid container className="media-row" spacing={2}>
          <Grid item xs={12} className="format-rows">
            <Box component="div" className='mscb-media-format-title text-upper'>
              <Typography variant="h6" color="var(--mscb-black)">I. {titleFormat}</Typography>
            </Box>
            <Grid container className="detail-row">
              <Grid item xs={4}>
                <Box component="div" className='mscb-media-label'>
                  <Typography variant="subtitle2" color="primary">1. {upImages}</Typography>
                </Box>
                <UploadFileType typeFile={"image"} clsName='media-upload-wrapper-img'>
                  <AiFillPicture />
                </UploadFileType>
              </Grid>
              <Grid item xs={4}>
                <Box component="div" className='mscb-media-label'>
                  <Typography variant="subtitle2" color="primary">2. {upVideos}</Typography>
                </Box>
                <UploadFileType typeFile={"video"} clsName='media-upload-wrapper-vid'>
                  <RiVideoLine />
                </UploadFileType>
              </Grid>
              <Grid item xs={4}>
                <Box component="div" className='mscb-media-label'>
                  <Typography variant="subtitle2" color="primary">3. {upAudios}</Typography>
                </Box>
                <UploadFileType typeFile={"audio"} clsName='media-upload-wrapper-aud'>
                  <IoIosMusicalNotes />
                </UploadFileType>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="rule-row">
            <Box component="div" className='mscb-media-condition-title text-upper'>
              <Typography variant="h6" color="var(--mscb-black)">II. {titleRule}</Typography>
            </Box>
            <Grid container>
              <Grid item xs={6}>
                <Box component="div" className='mscb-media-label'>
                  <Typography variant="subtitle2" color="primary">1. {labelSmall}</Typography>
                </Box>
                <Grid container className='media-checkboxes'>
                  <Grid item xs={4}>
                    <CheckboxGroup
                      ref={imageRef}
                      checkallLabel={upImages}
                      listOptions={imgOptions}
                      defaultCheckedList={[{ label: "Png", value: "Png", checked: false }]}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CheckboxGroup
                      checkallLabel={upVideos}
                      listOptions={vidOptions}
                      defaultCheckedList={[{ label: "Mp4", value: "Mp4", checked: true }]}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <CheckboxGroup
                      checkallLabel={upAudios}
                      listOptions={audOptions}
                      defaultCheckedList={[{ label: "Mp3", value: "Mp3", checked: true }]}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Box component="div" className='mscb-media-label'>
                  <Typography variant="subtitle2" color="primary">2. {titleSize}</Typography>
                </Box>
                <Grid container className="label-group">
                  <Grid item xs={4}>
                    <Input className="label-siz" placeholder="MB" label="Hình ảnh" />
                  </Grid>
                  <Grid item xs={4}>
                    <Input className="label-siz" placeholder="MB" label="Video" />
                  </Grid>
                  <Grid item xs={4}>
                    <Input className="label-siz" placeholder="MB" label="Ghi âm" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormManageMedia;
