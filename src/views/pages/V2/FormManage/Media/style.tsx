import { makeStyles } from "@mui/styles";
import mediaAud from "assets/images/bg/media-aud.png";
import mediaImg from "assets/images/bg/media-img.png";
import mediaVid from "assets/images/bg/media-vid.png";

const mediaStyle = makeStyles(() => ({

    root: {
        paddingLeft: '30px',
        width: '95%',
        '& .media-row': {
            '& .format-rows':{
                '& .MuiTypography-h6':{
                    fontSize: '16px',
                    lineHeight: '20px',
                },
                '& .mscb-media-format-title':{
                    paddingTop: '10.5px',
                    paddingBottom: '5px'
                },
                '& .MuiTypography-subtitle2':{
                    fontWeight: 600,
                },
            },
            '& .detail-row':{
                // height: '360px',
                overflow: 'inherit',
                '& .mscb-media-label':{
                    padding: '5px 0 5px 0',
                },
                '& .containers': {
                    transform: 'none',
                    '& .drop-containers': {
                        marginTop: '0',
                        backgroundColor: '#f2f5ff',
                        '& .upload-bg': {
                            paddingTop: '4px',
                        }
                    },
                    '& .file-display-containers': {
                        position: 'inherit',
                    }
                },
                '& .media-upload-wrapper-img': {
                    '& div.MuiGrid-root': {
                        height: '100%',
                    },
                    '& .upload-bg': {
                        width: '117px',
                        height: '94px',
                        background: `url(${mediaImg}) no-repeat center center`,
                        backgroundSize: '100%',
                        textAlign: 'center',
                        margin: '0 auto',
                        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                        // paddingTop: '30px',
                    },
                    '& .file-status-bar': {
                        marginTop: '12px',
                        marginBottom: '8px',
                        '& .file-type-logo': {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '12px',
                            '& svg': {
                                marginTop: '0',
                                marginLeft: '0',
                            }
                        }
                    }
                },
                '& .media-upload-wrapper-vid': {
                    '& div.MuiGrid-root': {
                        height: '100%',
                    },
                    '& .upload-bg': {
                        width: '117px',
                        height: '94px',
                        background: `url(${mediaVid}) no-repeat center center`,
                        backgroundSize: '100%',
                        textAlign: 'center',
                        margin: '0 auto',
                        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                        // paddingTop: '30px',
                    },
                    '& .file-status-bar': {
                        marginTop: '12px',
                        marginBottom: '8px',
                        '& .file-type-logo': {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '12px',
                            '& svg': {
                                marginTop: '0',
                                marginLeft: '0',
                            }
                        }
                    }
                },
                '& .media-upload-wrapper-aud': {
                    '& div.MuiGrid-root': {
                        height: '100%',
                    },
                    '& .upload-bg': {
                        width: '117px',
                        height: '94px',
                        background: `url(${mediaAud}) no-repeat center center`,
                        backgroundSize: '100%',
                        textAlign: 'center',
                        margin: '0 auto',
                        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                        // paddingTop: '30px',
                    },
                    '& .file-status-bar': {
                        marginTop: '12px',
                        marginBottom: '8px',
                        '& .file-type-logo': {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '12px',
                            '& svg': {
                                marginTop: '0',
                                marginLeft: '0',
                            }
                        }
                    }
                },
            },
            '& .rule-row':{
                '& .MuiTypography-h6':{
                    fontSize: '16px',
                    lineHeight: '20px',
                },
                '& .mscb-media-condition-title':{
                    paddingTop: '10.5px',
                    paddingBottom: '5px'
                },
                '& .mscb-media-label':{
                    padding: '5px 0 5px 0',
                },
                '& .MuiTypography-subtitle2':{
                    fontWeight: 600,
                },
                '& .media-checkboxes': {
                    marginLeft: '-12px',
                    '& span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label': {
                        fontSize: '14px',
                    },
                    '& label.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd': {
                        padding: '0',
                    }
                }
            },
            '& .ant-upload-drag-icon': {
                display: 'none',
            },
            // '& .upload-bg': {
            //     width: '100px',
            //     height: '80px',
            //     backgroundColor: 'var(--mscb-white)',
            //     margin: '0 auto',
            //     position: 'relative'
            // },
            // '& .upload-plus': {
            //     position: 'absolute',
            //     left: '45%',
            //     top: '80%',
            //     fontSize: '16px',
            //     '& svg': {
            //         color: '#f8ad08',
            //         backgroundColor: 'white'
            //     }
            // },
            '& .media-label': {
                color: 'var(--mscb-primary)',
                fontWeight: '600',
                fontSize: '15px',
            },
        },
        '& .media-head': {
            fontWeight: '600',
            fontSize: '16px'
        },
        '& .label-danger': {
            color: 'var(--mscb-danger)'
        },
        '& .type-row': {
            marginTop: '-10px',
            fontWeight: 'bold'
        },
        '& .rule-row': {
            '& .ant-checkbox-group': {
                fontWeight: 'normal'
            }
        },
        '& .label-group': {
            marginTop: '11px'
        },
        '& .label-siz': {
            '& .MuiInputLabel-root': {
                fontWeight: 'bold',
                fontSize: '14px',
                width: '98%'
            },
            '& .MuiInput-root': {
                width: '90%'
            },
            '& input': {
                '&::placeholder': {
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '14px'
                }
            }
        },
    }

})) as Function;

export default mediaStyle;