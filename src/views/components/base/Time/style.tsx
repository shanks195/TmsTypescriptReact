import { makeStyles } from '@mui/styles';
const TimeComponentStyle= makeStyles(()=>({
    root: {
       
       
        '& .MuiFormControl-root':{
            minWidth:'320px',
        },
        '& .MuiSvgIcon-root': {
            color: '#1825aa',
            
        },
        '& .MuiOutlinedInput-root': {
            minWidth:'320px'
        },
        '& .MuiCalendarPicker-root ': {
            left:'20% !important'
        },
        '& .time-12': {
            textAlign: 'left',
            
            '& .inputCH': {
                display: 'inline-block',
                marginTop:'17px',
                margin:'0 auto',
                width: '40px',
                height: '40px',
                padding: '10px 8px 9px',
                backgroundColor: '#c8c6c6',
                color:'white'
            },
            '& .inputAM': {
                backgroundColor: '#00a6fb'
            },
            '& .inputPM': {
                backgroundColor: '#c8c6c6'
            },
            
            
            '&  .time-picker':{
                '& .separator': {
                    '& .circle': {
                        width: '10px',
                        height: '10px',
                        color: '#00a6fb',
                        fontSize: '52px',
                        padding: '0 10px',
                        borderRadius: '50%',
                    }
                },
                 
                
                width: '100%',
                marginTop: '46px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                '& .hour': {
                    position: 'relative',
                    minWidth: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    '& .hr-up':{
                        position: 'absolute',
                        left:'50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '32px',
                        borderLeft:'20px solid transparent',
                        borderRight:'20px solid transparent',
                        cursor:'pointer',
                        top:'-10px',
                        borderBottom: '20px solid #0a0723'
                    
                    
                    },
                    '& .hr-down': {
                        position: 'absolute',
                        left:'50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '32px',
                        borderLeft:'20px solid transparent',
                        borderRight:'20px solid transparent',
                        cursor:'pointer',
                        
                        bottom:'-10px',
                        borderTop:' 20px solid #0a0723'
                    
                    },
                    
                    '& .hr' : {
                        minWidth:50,
                        height:50,
                        margin:'30px 0px 30px 0',
                        textAlign:'center',
                        boxShadow:' 0 3px 6px 0 rgba(11, 115, 206, 0.34)',
                        border: 'solid 1px #00a6fb',
                        backgroundColor: '#ffffff'

                    }
                },
                '& .minute':{
                    position: 'relative',
                    minWidth: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    '& .mns-up': {
                        position: 'absolute',
                        left:'50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '32px',
                        borderLeft:'20px solid transparent',
                        borderRight:'20px solid transparent',
                        cursor:'pointer',
                        top:'-10px',
                        borderBottom: '20px solid #0a0723',
                    
                    },
                    '& .mns-down': {
                        position: 'absolute',
                        left:'50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '32px',
                        borderLeft:'20px solid transparent',
                        borderRight:'20px solid transparent',
                        cursor:'pointer',
                        bottom:'-10px',
                        borderTop:' 20px solid #0a0723'
                    },
                    '& .mns' : {
                        minWidth:50,
                        height:50,
                        margin:'30px 0px 30px 0',
                        textAlign:'center',
                        boxShadow:' 0 3px 6px 0 rgba(11, 115, 206, 0.34)',
                        border: 'solid 1px #00a6fb',
                        backgroundColor: '#ffffff'

                    }
                },
                '& .second': {
                    position: 'relative',
                    minWidth: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    '& .snd-up':{
                        position: 'absolute',
                        left:'50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '32px',
                        borderLeft:'20px solid transparent',
                        borderRight:'20px solid transparent',
                        cursor:'pointer',
                       
                        top: '-10px',
                        borderBottom: '20px solid #0a0723', 
                        
                    
                    
                    },
                    '& .snd-down': {
                        position: 'absolute',
                        left:'50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '32px',
                        borderLeft:'20px solid transparent',
                        borderRight:'20px solid transparent',
                        cursor:'pointer',
                        
                        bottom:'-10px',
                        borderTop: '20px solid #0a0723'
                    
                    },
                    '& .snd' : {
                        minWidth:50,
                        height:50,
                        margin:'30px 0px 30px 0',
                        textAlign:'center',
                        boxShadow:' 0 3px 6px 0 rgba(11, 115, 206, 0.34)',
                        border: 'solid 1px #00a6fb',
                        backgroundColor: '#ffffff'

                    }

                }
            },
            '& .w227':{
                minWidth: '227px',
                maxWidth: 0
            
            },
            '& .h36':{
                height: 36
            },
            '& .bg-white-line': {
                    backgroundColor: '#f2f3f9',
                    border:'none'
            },
            '& .input-time-clock-v2': {
                display:'flex',
                paddingTop:9,
                paddingBottom:9,
                paddingLeft:10,
                paddingRight: 9,
                '& .icon-clock':{
                    marginLeft:'auto',
                    color:'#1825aa',
                    fontSize:'14px'
                }
            },
            '& .bg-white-line:focus': {
                outline: 'none'
            }
            
        },
        '& .textHour': {
            float: 'left',
            fontSize: '15px',
            fontWeight: 'bold',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.33,
            letterSpacing: 'normal',
            textAlign: 'left',
            color: '#1825aa',
            borderBottom: '2px solid #f8ad08',
            paddingRight: '20px',
        }
        
    }
}))
export default TimeComponentStyle