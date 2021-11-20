import { makeStyles } from "@mui/styles";

const dataTableStyle = makeStyles(() => ({
    root: {
        '& .mscb-table-metadata': {
            height: '650px',
            '& th, & td': {
                padding: '11.5px 10px 11px 10px',
                maxHeight: '41.5px',
                borderBottom: 'solid 1px #d5d5d5',
            },
            '& th': {
                color: 'var(--mscb-primary)',
                fontSize: '16px',
                borderBottom: '1px solid #353535',
                textTransform: 'uppercase',
                '& .MuiButton-text': {
                    minWidth: '0px',
                    padding: '0px 0px 4px 4px'
                },
            },

            '& .td-color': {
                color: 'var(--mscb-primary) !important',
                '& a': {
                    textDecoration: 'underline',
                }
            },
            '& td': {
                '& .MuiButton-text': {
                    padding: '0px',
                    justifyContent: 'flex-end',
                    minWidth: '0px',
                },
            },
        },
        '& .metadata-paging': {
            paddingTop: '20px'
        },
        // height: '648px',
        '& .MuiDataGrid-root .MuiDataGrid-columnHeaderTitle':{
            overflow: 'initial',
        },
        '& .MuiDataGrid-root .MuiDataGrid-columnHeaderTitleContainer':{
            color: 'var(--mscb-primary)',
            fontSize: '16px',
            padding: 0,
            textTransform: "uppercase"
            
        },
        '& .MuiDataGrid-columnSeparator':{
            '& .MuiSvgIcon-root':{
                fill: 'white',
            }
        },
        '& .table-col-code':{
            color: 'var(--mscb-primary)',
            fontWeight: 600,
            textDecoration: 'underline'
        },
        '& .table-col-name':{
            // fontWeight: 600,
        },
        '& .table-col-version':{
            // fontWeight: 600,
        },
        '& .table-col-update':{
            // fontWeight: 600,
        },
        '& .table-col-system':{
            fontWeight: 600,
        },
        '& .MuiDataGrid-root .MuiDataGrid-footerContainer':{
            justifyContent: 'flex-start',
            padding: '25px 0 15px 0'
        },
        '& .MuiDataGrid-root':{
            border: 'none'
        },
        '& .mscb-document-name':{
            '& .mscb-document-icon-box':{
                padding: '0 10px 0 0'
            },
            '& .mscb-document-label-box':{
                '& .mscb-document-label':{
                    textDecoration: 'underline',
                },
                '& .MuiTypography-subtitle2':{
                    
                }
            },
            
        },
        '& .mscb-version':{
            '& .mscb-version-name-box':{
                '& .mscb-version-name-label':{
                    
                },
            },
            '& .mscb-version-date-box':{
                '& .mscb-version-date-label':{
                    fontSize: '12px',
                },
            },
        },
        '& .mscb-update':{
            '& .mscb-update-name-box':{
                '& .mscb-update-name-label':{
                    
                },
            },
            '& .mscb-update-date-box':{
                '& .mscb-update-date-label':{
                    fontSize: '12px',
                },
            },
        },
        '& .mscb-action-status':{
            paddingLeft: '10px',
            '& .mscb-edit-icon-box':{
            
            },
            '& .mscb-lock-icon-box':{
                paddingLeft: '10px',
            }
        },
        '& .templatedata-paging': {
            paddingTop: '20px',
        },'& .link-size':{
            width:"18px",
            height:"18px"
        }
    },

    content: {
        height: '100%',
    }
})) as Function;

export default dataTableStyle;