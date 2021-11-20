import {FC, useEffect} from 'react';
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { updateDocumentTitle } from "utils";
import GroupList from './FormGroupList'
import { Route, Routes,Outlet } from 'react-router-dom';

const FormMetadata: FC = () => {
    const {t} = useTranslation();
    const MetadataClass = clsx("mscb-metadata");

    useEffect(() => {
        updateDocumentTitle(t('Pages.Group.Sidebar'));
    });

    return (
        <div className={MetadataClass}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Routes>
                        <Route path="*" element={<Outlet/>}>
                            <Route index element={<GroupList/>}/>
                            <Route path=":id" element={<GroupList/>}/>
                        </Route>
                    </Routes>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormMetadata;
