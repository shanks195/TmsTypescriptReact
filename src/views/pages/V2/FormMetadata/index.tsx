import {FC, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { updateDocumentTitle } from "utils";
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import MetaDataList from './MetadataList';
import MetaDataSetting from './MetadataSetting';

interface IParams {
    id:string
}

const FormMetadata: FC = () => {
  const {t} = useTranslation()
  const MetadataClass = clsx("mscb-metadata");

  useEffect(() => {
    updateDocumentTitle(t('Pages.Metadata.Sidebar'));
  });
  console.log('render metadata')
  const {id} = useParams() as IParams
  console.log("id" ,id);
  
  return (
    <div className={MetadataClass}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Routes>
            <Route path="*" element={ <Outlet /> }>
              <Route index element={<MetaDataList/>} />
              <Route path=":id" element={<MetaDataSetting/>} />
            </Route>
          </Routes>
        </Grid>
      </Grid>
    </div>
  )
}

export default FormMetadata;
