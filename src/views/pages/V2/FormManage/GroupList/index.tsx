import { FC, useEffect } from "react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ScrollBar from "react-perfect-scrollbar";
import GroupList from "views/components/layout/GroupList";

import { useTranslation } from "react-i18next";
import listStyle from "./style";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchTypes,
  getTypes,
  isLoadingTypes,
  isLoadedTypes,
} from "features/inputType/store/slice";

interface FormManageGroupListComponent extends FC {}

const FormManageGroupList: FormManageGroupListComponent = () => {
  const classes = listStyle();

  const types = useSelector(getTypes);

  const loading = useSelector(isLoadingTypes);

  const loaded = useSelector(isLoadedTypes);

  const { t } = useTranslation();

  const listTitle = t("Common.Input.List.Label");

  const dispatch = useDispatch();

  const ListTypeClass = clsx(classes.root, "mscb-group-list-type");

  useEffect(() => {
    !types.length && !loading && !loaded && dispatch(fetchTypes());
  });

  const listRouter = [
    "text",
    "single-options",
    "multi-options",
    "date",
    "time",
    "datetime",
    "media",
    "file",
    "rating",
    "range",
    "questions",
    "toggle-information",
    "signature",
    "group",
  ];
  const list_group=types.map((item,index)=>{
    return {
      label:item.name,
      key:item.id,
      value:listRouter[index]
    }
  })

  return (
    <div className={ListTypeClass}>
      <h6 className="group-list-header text-upper">{listTitle}</h6>
      <Grid container className="group-list-type">
        <Grid item xs={3} className="mscb-list-root">
          <ScrollBar className="list-root">
            <GroupList typeTMS={false} options={list_group} />
          </ScrollBar>
        </Grid>
        <Grid item xs={9} className="mscb-group-list-content">
          <Outlet/>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormManageGroupList;
