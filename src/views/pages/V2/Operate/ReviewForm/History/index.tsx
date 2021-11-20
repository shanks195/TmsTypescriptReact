import React, { FC, useEffect, useState } from 'react';
import CardOutside from 'views/components/layout/CardOutside';
import Empty from 'views/components/layout/Empty';
import {
  Avatar, Divider, IconButton, List, ListItem, ListItemAvatar,
  ListItemSecondaryAction, ListItemText, ListSubheader, Typography
} from '@mui/material';
import HistoryStyle from './style';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCurrentTemplateUserView, getTemplateUserView } from 'features/template-user-view/store/slice';
import { IDateLog } from 'types/models/TemplateUserView';
import { converStringDate, converStringDateTime } from 'utils';
import clsx from 'clsx';

export interface IobjData {
  timeStart: string;
  timeEnd: string;
  title: string;
  status: string;
  location: string;
  owner: string;
}

// interface IContent {
//   date: string;
//   content: IobjData[];
// }

const History: FC = () => {
  const classes = HistoryStyle();
  const { t } = useTranslation();

  // const dispatch = useDispatch();
  const templateUserView = useSelector(getTemplateUserView);
  const currentTemplateUserView = useSelector(getCurrentTemplateUserView);
  const [dateLogs, setDateLogs] = useState<IDateLog[]>([]);

  useEffect(() => {
    if (templateUserView && currentTemplateUserView) {
      const currentActive = currentTemplateUserView.active;
      let log:IDateLog[] = [];
      if (currentTemplateUserView.isGroup) {
        log = templateUserView.groups.find(group => group.id.toString() === currentActive)?.date_group_logs ?? [];
      } else {
        log = templateUserView.template_fields.find(field => field.key === currentActive)?.date_logs ?? [];
      }
      setDateLogs(log as IDateLog[]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTemplateUserView]);

  return <CardOutside label={t("Pages.Layout.Reivew.History")} className={classes.root}>
      {dateLogs?.length === 0 ? <Empty>{t("Pages.Init.Table.Emty")}</Empty>
        :
        // <ScrollBar options={{ suppressScrollX: true }} className={classes.root}>
        dateLogs.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <List className={'list-container'}
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    {converStringDate(item.date)}
                    <Divider />
                  </ListSubheader>
                }
              >
                {item.logs.map((log, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <ListItem alignItems="flex-start" >
                        <ListItemAvatar>
                          <Avatar alt="AVT"/>
                        </ListItemAvatar>
                        <ListItemText
                          className={classes.owner}
                          primary={
                            <React.Fragment>
                              <Typography className="full-name" >
                                {log.user_fullname}
                              </Typography>
                              <span className={classes.openDate}>{log.content}</span>
                              <br/>
                              <span className={classes.openDate}>{converStringDateTime(log.updated_at)}</span>
                            </React.Fragment>
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete" disabled={true} disableRipple={true} size={"small"} sx={{ color: '#1825aa !important' }}>
                            {"#" + (idx + 1).toString()}
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </React.Fragment>
                  );
                })}
              </List>
            </React.Fragment>
          );
        })
        // </ScrollBar>
      }
  </CardOutside>
}

export default History;