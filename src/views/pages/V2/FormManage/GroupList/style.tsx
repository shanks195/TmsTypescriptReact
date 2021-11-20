import { makeStyles } from "@mui/styles";

const listStyle = makeStyles(() => ({

    root: {
        padding: '20px',
        '& .group-list-header': {
            fontSize: '19px',
            fontWeight: 'bold'
        },
        '& .mscb-list-root': {
            maxWidth: '240px',
            '& .list-root': {
                // height: '100vh',
                '& div': {
                    height: 'auto',
                },
                '& ul.MuiList-root.MuiList-padding': {
                    paddingBottom: '0px',
                    border: 'none',
                    '& li:first-child': {
                        marginTop: '0px',
                    },
                    '& li': {
                        '& .MuiListItemButton-root.MuiListItemButton-dense.MuiListItemButton-gutters.MuiButtonBase-root': {
                            boxShadow: 'none'
                        }
                    }
                },
                '& .MuiListItem-root':{
                    maxHeight: '39px',
                    margin: '1px 0'
                } 
            },
        },
        
        '& .group-list-type': {
            borderTop: '1px solid  #d5d5d5',
            borderBottom: '1px solid  #d5d5d5',
            '& .scrollbar-container.list-root.ps':{
                // maxHeight: '700px',
            }
        },
        '& .group-list-type::-webkit-scrollbar ':{
            backgroundColor:'#fff',
            
        },
        '& .mscb-group-list-content':{
            borderLeft: '2px solid  #DFDFDF',
        }
    }

})) as Function;

export default listStyle;