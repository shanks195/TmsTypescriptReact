import { makeStyles } from "@mui/styles";

const ToggleStyle = makeStyles(() => ({

    root: {
        '& .list-toogle': {
            color: '#353535',
            paddingBottom: '10px',
            fontSize: 16,
            '& .ol-toogle': {
                '& .toogle-button': {
                    backgroundColor: '#ebecf2',
                    maxWidth: '322px',
                    height: '56px',
                    display: 'flex',
                    alignItems:'center',
                    padding: '10px',
                    '& .icon-no': {
                        marginRight: '8px',
                        color:'#353535',
                    },
                    '& span.title': {
                        color: '#353535',
                        fontWeight:300,
                    },
                    '& .switch': {
                        marginLeft: 'auto'
                    }
                    
                },
                '& .toogle-button.toogle-on': {
                    backgroundColor: 'white',
                    border:'1px solid #1825aa'
                }
            },
            '& li': {
                color: '#1825aa',
                fontSize: '15px',
                '& h6': {
                    color: '#353535',
                    paddingTop: 11.3,
                    paddingBottom:12,
                }
            },
            '& ol': {
                paddingLeft:'0px'
            }
        },
        '& .list-root': {
            height: '100%'
        },
        '& .group-list-type': {
            borderTop: '2px solid  var(--mscb-border-gray)',
            height: '85%'
        },
    }

})) as Function;

export default ToggleStyle ;