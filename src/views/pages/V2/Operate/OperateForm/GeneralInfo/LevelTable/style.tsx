import { makeStyles } from '@mui/styles';

const TableLevelStyle = makeStyles(()=>({
    table: {
        borderRadius: '0',

        '& th':{
            border: "solid 1px var(--mscb-secondary)",
            textTransform: 'uppercase'
        },

        '& thead':{
            '& th':{
                border: "solid 1px var(--mscb-secondary)",
                paddingTop: '12px',
                paddingBottom: '12px',
                color: 'var(--mscb-primary)',
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                textTransform: 'uppercase'
            }
        },

        '& tbody':{
            '& th':{
                border: "solid 1px var(--mscb-secondary)",
                paddingTop: '12px',
                paddingBottom: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                textTransform: 'uppercase'
            },
            '& td':{
                paddingTop: '10px',
                paddingBottom: '10px',
                border: "solid 1px var(--mscb-secondary)",
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--mscb-secondary)',
                fontFamily: 'Roboto',

                '& button':{
                   padding: '7px 8px 11px 5px'
                },
            }
        }
    },
    radio:{
        '& svg':{
            backgroundColor: '#1825aa',
            borderRadius:'50%',
            color: '#FFF !important',
            padding: '1px',
        }
    }
})) as Function

export default TableLevelStyle;
