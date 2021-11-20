import { Box, Button, Grid } from "@mui/material";
import { FC, useEffect, useRef } from "react";
import CardOutside from "views/components/layout/CardOutside";
import PdfViewer from "../OperateForm/SourceDataInfo/pdfPre";
import clsx from 'clsx';
import reviewFormStyle from "./style";
import Input, { InputRef } from "views/components/base/Input";
import { VscSearch } from "react-icons/vsc";
import MetadataInfo from "./Info";
import MetadataList from "./MetadataList";
import History from "./History";
import { useParams } from 'react-router-dom';
import ListTemplatePreview from "views/components/layout/ListTemplatePreview";
import { useDispatch, useSelector } from "react-redux";
import { fetchListTemplate, getListTemplate, isLoadedListTemplate, isLoadingListTemplate } from "features/listTemplate/store/slice";
import Select from "views/components/base/Select";
import { isFetching, isFetched, getTemplateUserView, fetchTemplateUserView, setCurrentTemplateUserView, getCurrentTemplateUserView } from "features/template-user-view/store/slice";
import { useTranslation } from "react-i18next";

interface IParams{
  id:string;
}

const ReviewForm: FC = () => {
  const { t } = useTranslation();
  const classes = reviewFormStyle();
  const formClass = clsx(classes.root, "review-form");
  const {id} = useParams() as IParams

  const listTemplate = useSelector(getListTemplate);
  const Loading = useSelector(isLoadingListTemplate);
  const Loaded = useSelector(isLoadedListTemplate);
  const templateUserView = useSelector(getTemplateUserView);
  const fetching = useSelector(isFetching);
  const fetched = useSelector(isFetched);
  const current = useSelector(getCurrentTemplateUserView);

  const dispatch = useDispatch();

  const searchInputRef = useRef<InputRef>(null);

  useEffect(() => {
    !templateUserView
      && !fetched
      && !fetching
      && dispatch(fetchTemplateUserView({template_id: id}));
  });

  useEffect(() => {
    if (templateUserView) {
      const currentObj = {
        key: templateUserView.template_fields[0]?.key.toString(), 
        value: templateUserView.template_fields[0]?.default_data ?? '',
        label: templateUserView.template_fields[0]?.label ?? '',
        isGroup: false
      };
      dispatch(setCurrentTemplateUserView(currentObj))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateUserView])

  useEffect(() => {
    !listTemplate.length && !Loading && !Loaded && dispatch(fetchListTemplate('1'));
  });
  
  const handleSelect = () => {
  }

  const searchTemplate = () => {
    const keyword = searchInputRef.current?.getValue() ?? '';
    dispatch(fetchTemplateUserView({template_id: '501', search_label_text: keyword}));
  }

  return <>
    <Grid container spacing={3} justifyContent="center" alignItems="flex-start" className={`${formClass} h-full`}>
      <Grid item xl={3} lg={12} md={12} xs={12} className={classes.selectTop}>
        <Select
          options={[{ label: "Tất cả thư mục", value: 1 }]}
          value={1}
        />
        <CardOutside label="THƯ MỤC" className={`${classes.list} h-full`}>
          <ListTemplatePreview options={listTemplate} onChange={handleSelect}/>
        </CardOutside>
      </Grid>
        <Grid item xl={9}>
          <CardOutside label={t('Pages.Layout.Reivew.FormCif')}>
            <Box component="div" className="mscb-form-search-bar flex-row">
              <Input
                className="input-search"
                placeholder={t('Pages.Layout.Review.Search')}
                ref={searchInputRef}
              />
              <Button className="btn-search" onClick={searchTemplate}>
                <VscSearch size="19px" color="#fff" />
              </Button>
            </Box>

            <Grid container spacing={3}>
              <Grid item xl={8} lg={12} md={12} xs={12}>
                {(() => {
                  if (current.preview_file.length) {
                    return <PdfViewer pdf={current.preview_file}/>
                  }
                })()}
                <MetadataInfo />
              </Grid>

              <Grid item xl={4} lg={12} md={12} xs={12}>
                <Grid container rowSpacing='20px' direction="row">
                  <Grid item xl={12} lg={6} md={12} xs={12}>
                      <MetadataList />
                  </Grid>

                <Grid item xl={12} lg={6} md={12} xs={12}>
                    <History />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </CardOutside>
      </Grid>
    </Grid>
  </>
}

export default ReviewForm;