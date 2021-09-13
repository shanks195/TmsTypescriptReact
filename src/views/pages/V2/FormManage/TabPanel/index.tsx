import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
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
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
   '& .MuiAppBar-colorDefault': {
      color: 'rgba(0, 0, 0, 0.87)',
      backgroundColor: 'white!important',
      boxShadow: 'none!important',
      borderBottom: '1px solid #d8d8d8',
    },
    '& .MuiBox-root-20': {
      height:'79vh'
    },
    backgroundColor: theme.palette.background.paper,
    maxWidth: 360,
    height:"86vh",
  },
  page: {
    padding: 10,
  },
  margin: {
    margin: 0,
  },
  lineSys: {
    margin: 0,
    paddingTop: 0,
    paddingBottom: '10px',
    fontSize: '14px',
    fontWeight: 600,
    borderBottom: '1px solid #d8d8d8',
    
  },
  Ellipse113: {
    display:'inline-block',
    minWidth: '42px',
    height: '42px',
    margin: '10px 9px 9px 0px',
    border: 'solid 1px #e7e7e7',
    borderRadius: "50%",
    backgroundColor: 'red',
   
  },
  dlIBlock: {
    display: 'inline-block',
    marginTop:'10px',
  },
  h1Title: {
    fontSize: '14px',
    margin:0
  },
  pTitle: {
    marginTop: 5,
    marginBottom: 5,
    color: 'rgba(0, 0, 0, 0.22)'
  },
  stt: {
    display: 'inline-block',
    float: 'right',
    paddingTop: 20,
    paddingLeft: '35px',
    fontSize: 14,
    color:'#1825aa'
  },
  flex: {
    display:'flex',
  },
  pGhiChu: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch:'normal',
    fontStyle: 'normal',
    lineHeight: 1.57,
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#353535',
    borderBottom: '1px solid #d8d8d8',
      paddingBottom:14
  },
  longCon: {
      marginLeft: '20px',
      marginRight: '20px',
      background: 'white',
      padding: 0,
  }

}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className="">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className= {classes.longCon}
        >
          <Tab label="History" {...a11yProps(0)} />
          <Tab label="Guide" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <p className={classes.lineSys}>07/05/2021</p>
          <div >
            <div className={classes.flex}>
              <span className={classes.Ellipse113}></span>
              <div className={classes.dlIBlock}>
                <h6 className={classes.h1Title}>Nguyen To The Toan</h6>
                <p className={classes.pTitle}>Tạo Ngày 07/05/2021-08:21</p>
              </div>
              <span className={classes.stt}>#1</span>
            </div>
            <div>
              <p className={classes.pGhiChu}>
              Ghi chú: <br />
            "@Nguyen_Anh_Dao, đã bổ sung thông tin tên metadat và chuyển đổi qua nhóm thẩm định."
            </p>
            
            </div>
          </div>
          <p className={classes.lineSys}>07/05/2021</p>
          <div >
            <div className={classes.flex}>
              <span className={classes.Ellipse113}></span>
              <div className={classes.dlIBlock}>
                <h6 className={classes.h1Title}>Nguyen To The Toan</h6>
                <p className={classes.pTitle}>Tạo Ngày 07/05/2021-08:21</p>
              </div>
              <span className={classes.stt}>#2</span>
            </div>
            <div>
              <p className={classes.pGhiChu}>
              Ghi chú: <br />
            "@Nguyen_Anh_Dao, đã bổ sung thông tin tên metadat và chuyển đổi qua nhóm thẩm định."
            </p>
            
            </div>
          </div>
          <p className={classes.lineSys}>07/05/2021</p>
          <div >
            <div className={classes.flex}>
              <span className={classes.Ellipse113}></span>
              <div className={classes.dlIBlock}>
                <h6 className={classes.h1Title}>Nguyen To The Toan</h6>
                <p className={classes.pTitle}>Tạo Ngày 07/05/2021-08:21</p>
              </div>
              <span className={classes.stt}>#2</span>
            </div>
            <div>
              <p className={classes.pGhiChu}>
              Ghi chú: <br />
            "@Nguyen_Anh_Dao, đã bổ sung thông tin tên metadat và chuyển đổi qua nhóm thẩm định."
            </p>
            
            </div>
            <p className={classes.lineSys}>Ghi bình luận và @ de task tên</p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}