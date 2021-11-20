import { makeStyles } from "@mui/styles";

const ToggleCompoStyle  = makeStyles(() => ({

    root: {
        '& .mscb-toogle-on-box':{
            padding: '20px 0',
        },
        '& h6': {
            marginTop:10,
        },
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
            border:'1px solid #1825aa',
            boxShadow: '0 3px 6px 0 rgba(7, 99, 178, 0.31)',
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

export default ToggleCompoStyle  ;