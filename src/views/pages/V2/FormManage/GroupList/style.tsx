import { makeStyles } from "@mui/styles";

const listStyle = makeStyles(() => ({

    root: {
        '& .group-list-header': {
            fontSize: '19px',
            fontWeight: 'bold'
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

export default listStyle;