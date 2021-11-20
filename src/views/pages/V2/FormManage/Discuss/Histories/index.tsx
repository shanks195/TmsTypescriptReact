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
        <Box className={historyContentClass}>
           <Grid container>
                <Grid item xs={12}>
                    <Box  className="mscb-history-container">
                        <Grid container>
                            <Grid item xs={12}>
                                <Box className="mscb-history-date">
                                    <Typography component="span" variant="h6" color="var(--mscb-black)">07/05/2021</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box  className="mscb-history-info-content flex-row justify-between">
                                    <Box  className="mscb-history-info flex-row">
                                        <Box className="history-avatar">
                                            <Avatar alt="avatar" src="" />
                                        </Box>
                                        <Box className="history-info">
                                            <Box  className="history-info-name">
                                                <Typography component="span"  variant="subtitle2" color="var(--mscb-black)">Nguyễn Anh Đào - Chuyên viên</Typography>
                                            </Box>
                                            <Box  className="history-info-date">
                                                <Typography component="span"  variant="h6" color="rgba(145,145,145,0.8)">Tạo ngày 07/05/2021 - 08:25</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box  className="mscb-history-id">
                                        <Typography variant="h6" component="span"  color="var(--mscb-primary)">#1</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box className="mscb-history-note">
                                    <Box  className="mscb-history-note-label">
                                        <Typography variant="body2" component="span" color="var(--mscb-black)">{noteLabel}:</Typography>
                                        
                                    </Box>
                                    <Box  className="mscb-history-note-content"> 
                                        <Typography variant="body2"component="span"  color="var(--mscb-black)">
                                            "Thay đổi tên metadata ngày của nhóm thông tin khách hàng thành ngày "
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            
                        </Grid>
                        <Grid container className="footer-title shadow"> 
                           <input placeholder='Ghi bình luận và @ để tag tên'/>
                        </Grid>
                    </Box>
                </Grid>
           </Grid>
        </Box>
     );
}

export default HistoryContent;