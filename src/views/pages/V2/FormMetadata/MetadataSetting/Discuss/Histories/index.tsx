import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import historyContentStyle from './styles';


const HistoryContent: FC = () => {
    const classes = historyContentStyle();
    const { t } = useTranslation();
    const noteLabel = t('Common.Note.Label');
    const historyContentClass = clsx(classes.root, "mscb-tab-history-content");


    return (
        <Box component='div' className={historyContentClass}>
           <Grid container>
                <Grid item xs={12}>
                    <Box component="div" className="mscb-history-container">
                        <Grid container>
                            <Grid item xs={12}>
                                <Box component="div" className="mscb-history-date">
                                    <Typography variant="subtitle2" color="var(--mscb-black)">07/05/2021</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box component="div" className="mscb-history-info-content flex-row justify-between">
                                    <Box component="div" className="mscb-history-info flex-row">
                                        <Box component="div" className="history-avatar">
                                            <Avatar alt="avatar" src="" />
                                        </Box>
                                        <Box component="div" className="history-info">
                                            <Box component="div" className="history-info-name">
                                                <Typography variant="subtitle2" color="var(--mscb-black)">Nguyễn Anh Đào - Chuyên iên</Typography>
                                            </Box>
                                            <Box component="div" className="history-info-date">
                                                <Typography variant="body2" color="rgba(145,145,145,0.8)">Tạo ngày 07/05/2021 - 08:25</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box component="div" className="mscb-history-id">
                                        <Typography variant="subtitle1" color="var(--mscb-primary)">#1</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box component="div" className="mscb-history-note">
                                    <Box component="div" className="mscb-history-note-label">
                                        <Typography variant="body2" color="var(--mscb-black)">{noteLabel}:</Typography>
                                        
                                    </Box>
                                    <Box component="div" className="mscb-history-note-content"> 
                                        <Typography variant="body2" color="var(--mscb-black)">
                                            "Thay đổi tên metadata ngày của nhóm thông tin khách hàng thành ngày "
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
           </Grid>
        </Box>
     );
}

export default HistoryContent;