import { FC, useEffect, useState, useRef } from 'react';
import { Grid, Tab, Tabs } from "@mui/material";
import clsx from 'clsx';
import { useTranslation } from "react-i18next";
import CardOutside from "views/components/layout/CardOutside";
import SwipeableViews from 'react-swipeable-views';
import TabPanel from 'views/components/layout/TabPanel';
import TabButton from 'views/components/layout/TabButton';
import operateStyle from "./style";
import { IOperateParams } from 'types/models/templateGroups';
import FormGeneralInfo, { FormGeneralInfoRef } from './GeneralInfo';
import FormSourceDataInfo from './SourceDataInfo';
import { useDispatch } from 'react-redux';
import { createTemplate, UpdateTemplate } from 'features/create-template/store/slice';
import { ITemplateCreateBody } from 'types/models/create-template';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTemplateDetails, clearDetail } from 'features/operate-details-info/store/slice';

const DefinedTabs = ['general', 'income'];
export interface ITemplateParams {
  idTemplate: string;
}
export const findTabPosition = (tab: string) => {
  const pos = DefinedTabs.indexOf(tab);
  return !!~pos ? pos : 0;
}

export const findTabName = (pos: number) => {
  return !!DefinedTabs[pos] ? DefinedTabs[pos] : DefinedTabs[0];
}
interface OperateFormProps {
  isUpdate: boolean
}
const OperateForm: FC<OperateFormProps> = (props) => {
  const { isUpdate } = props
  const classes = operateStyle();
  const params = useParams() as IOperateParams;
  const dispatch = useDispatch();
  const currentValue = findTabPosition(params.tab);
  const [value, setValue] = useState<number>(currentValue);

  const { t } = useTranslation();
  const titleCashOut = t('Pages.Layout.EForm.TSetting');
  const titleTabInfor = t('Pages.Layout.EForm.TInfor');
  const titleTabSour = t('Pages.Layout.EForm.TSource');
  const templateRef = useRef<FormGeneralInfoRef>(null);
  const templateData = () => templateRef.current?.getValue()
  useEffect(() => {
    if (currentValue !== value && value !== undefined) {
      setValue(currentValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentValue]);
  const navigate = useNavigate()

  // const changeTab = (e: SyntheticEvent, newValue: number) => {
  //   history.push(formatPath(
  //     PAGE_URL.V2.Operate.Detail.Route,
  //     params.id,
  //     params.parent,
  //     params.docid,
  //     findTabName(newValue)
  //   ));
  // }

  useEffect(() => {
    if (isUpdate) {
      if (params.id.match(/^\d+$/)) {
        dispatch(fetchTemplateDetails(params.id))
      }
      else {
        navigate('')
      }
    }
    else {
      dispatch(clearDetail())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSaveTemplate = () => {
    if (isUpdate) {
      dispatch(UpdateTemplate({ data: templateData() as ITemplateCreateBody, id: Number(params.id) }))  //update
    } else {
      dispatch(createTemplate(templateData() as unknown as ITemplateCreateBody));
    }
  }

  const onBackTemplate = () =>{
    // navigate(formatPath(PAGE_URL.V2.Operate.Detail.Route, ''))
  }

  const onSaveInputDeclaration = () => {
    console.log("onSaveInputDeclaration") // check save input declaration
  }

  const onSave = () => {
    switch (value) {
      case 0:
        onSaveTemplate();
        break;
      case 1:
        onSaveInputDeclaration();
        break;
    }
  }
  const handleTabPanel = (event: React.SyntheticEvent, index: number) => {
    setValue(index);
  }

  return <Grid container className={clsx(classes.rootOper, 'wh-full')}>

    <Grid item xs={12} className="operate-info-data">
      <Grid container>
        <CardOutside label={titleCashOut}>
          <div className={clsx('mscb-init-tab')}>
            <Tabs variant="fullWidth" value={value} indicatorColor="primary" onChange={handleTabPanel}>
              <Tab label={titleTabInfor} />
              <Tab label={titleTabSour} />
            </Tabs>
            {/* <SwipeableViews axis="x" index={value} onChangeIndex={handleTabPanel}> */}
            <SwipeableViews axis="x" index={value}>

              <TabPanel padding={false} value={value} index={0}>
                <FormGeneralInfo ref={templateRef} isUpdate={isUpdate} />
              </TabPanel>
              <TabPanel padding={false} value={value} index={1}>
                <FormSourceDataInfo />
              </TabPanel>
            </SwipeableViews>
            <div className={classes.hrBorder}>
              <hr />
            </div>
            <div className="buttonBar">
              <TabButton
                onSave={onSaveTemplate}
                onBack={onBackTemplate}
              />
            </div>

          </div>
        </CardOutside>
      </Grid>
    </Grid>
  </Grid>

}

export default OperateForm;