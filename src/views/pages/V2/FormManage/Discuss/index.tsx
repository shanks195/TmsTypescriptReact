import { FC, ReactNode, useState, ChangeEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import theme from 'app/theme';
import HistoryContent from './Histories'
import discussStyle from './style';


interface TabPanelProps {
    children?: ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box component="div" p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const DiscussComponent: FC = () => {
    const classes = discussStyle();
    const { t } = useTranslation();
    const historiesTitle = t('Common.Tab.History.Title');
    const guideTitle = t('Common.Tab.Guide.Title')
    const tabPanelClass = clsx(classes.root, "mscb-tab-panel");
    const [value, setValue] = useState(0);

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box component='div' className={tabPanelClass}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label={historiesTitle} {...a11yProps(0)} className="mscb-tab-history-title"/>
                    <Tab label={guideTitle} {...a11yProps(1)} className="mscb-tab-history-title"/>
                </Tabs>
            </AppBar>
            <TabPanel 
                value={value} 
                index={0} 
                dir={theme.direction}
            >
                <HistoryContent />
            </TabPanel>
            <TabPanel 
                value={value} 
                index={1}
            >
                {guideTitle}
            </TabPanel>
        </Box>
     );
}

export default DiscussComponent;