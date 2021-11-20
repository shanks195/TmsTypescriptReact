import { makeStyles } from "@mui/styles";

const styleMetadataList = makeStyles(() => ({
    root: {
        marginTop: '12px',
        width: '250px',
        '& ul': {
            padding: 0,
            listStyleType: 'none'
        }
    },

    search: {
        position: 'relative',
        display: 'flex',
        marginBottom: '16px',
        'align-items': 'center',
        '& svg': {
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& .input': {
            border: 'solid 1px #d5d5d5',
            '& > div > div': {
                'padding-left': '9px !important',
                'background-color': 'white !important',
            },
            '& input': {
                width: '100%',
                height: '36px',
                margin: '0 11px 0 0',
                padding: '9px 114.2px 8px 9px',
                border: 'none',
                'background-color': '#fff',
                '&::placeholder': {
                    'font-style': 'italic',
                    'font-size': '14px',
                    'font-weight': 300,
                    color: 'var(--mscb-secondary)'
                }
            },
            '& .symbol-search': {
                'font-size': '25px',
                'font-weight': 900,
                color: 'var(--mscb-primary)'
            }
        },
        '& .symbol-add-group': {
            marginRight: '7px',
            marginLeft: '11px',
            width: '30px',
            height: '30px',
            'font-size': '16px',
            color: 'var(--mscb-primary)'
        }
    },

    list: {
        paddingRight: '5px !important',
        overflowY: 'auto',
        height: '100%',
        '&::-webkit-scrollbar': {
            width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
            'border-radius': '20px',
            'background-color': '#d5d5d5'
        },
        '& > li:first-child': {
            marginTop: 0
        }
    },

    group: {
        '& .head': {
            display: 'flex',
            padding: '10px 12px',
            'align-items': 'center',
            'box-shadow': '0 3px 6px 0 rgba(184, 185, 210, 0.24)',
            backgroundColor: '#f2f3f9',
            border: '1px solid transparent',
            '& .symbol': {
                width: '30px',
                height: '30px',
                margin: '0 11px 0 0',
                padding: '8px 6px 7px 7px',
                'border-radius': '1px',
                border: 'solid 1px #1825aa',
                'background-color': '#fff',
                'font-size': '15px',
                color: 'var(--mscb-primary)'
            },
            '& > div': {
                position: 'relative',
                width: '100%',
                'font-size': '15px',
                'font-weight': 500,
                color: 'var(--mscb-primary)'
            },
            '& .heading-1': {
                display: 'flex',
                '& svg': {
                    '&:hover': {
                        cursor: 'pointer'
                    }
                },
                '& .caption': {
                    width: '100%'
                },
                '& .icon': {
                    display: 'flex',
                    'align-items': 'center',
                    columnGap: '6px',
                    height: '18px',
                    width: '18px',
                    '&:hover': {
                        'background-color': 'rgba(0, 0, 0, 0.1)',
                        'border-radius': '100%'
                    },
                    '& .arrow.down': {
                        transform: 'rotate(-90deg)'
                    }
                }
            },
            '&.active': {
                'background-color': 'rgba(94, 191, 255, 0.14)',
                border: 'solid 1px var(--mscb-primary)'
            }
        },
        '& .group': {
            display: 'none',
            '& > li': {
                position: 'relative',
                margin: '0 0 0 5.5px !important',
                '&::before': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    content: '""',
                    height: '100%',
                    width: '1px',
                    backgroundColor: '#38a3ff'
                },
                '& .line': {
                    position: 'relative',
                    padding: '16px 0 0 14.5px',
                    backgroundColor: "transparent",
                    '&::before': {
                        position: 'absolute',
                        top: '60%',
                        left: 0,
                        content: '""',
                        height: '1px',
                        width: '14.5px',
                        backgroundColor: '#38a3ff'
                    },
                    '& .content': {
                        position: 'relative',
                        '&::before': {
                            position: 'absolute',
                            left: 0,
                            top: '43%',
                            width: '6px',
                            height: '6px',
                            content: '""',
                            'background-color': '#209cee',
                            'border-radius': '100%'
                        }
                    }
                },
                '&:last-child': {
                    '&::before': {
                        height: '60%'
                    }
                }
            },
            '&.show': {
                display: 'contents'
            }
        }
    },

    item: {
        marginBottom: '16px',
        marginTop: '16px',
        '&:last-child': {
            marginBottom: 0
        },
        '& .line': {
            '& .content': {
                display: 'flex',
                padding: '7px 12px',
                backgroundColor: '#f2f3f9',
                '&:hover': {
                    border: 'solid 1px #var(--mscb-primary)',
                    'background-color': '#f2f3f9'
                },
                '& svg:first-child': {
                    'width': '30px',
                    'height': '30px',
                    'margin': '3px 11px 3px 0',
                    'padding': '2px 2px 3px 3px',
                    'border-radius': '2px',
                    'background-color': 'var(--mscb-white)',
                    'font-size': '25px',
                    'font-weight': 900,
                    color: '#209cee',
                    '-webkit-text-stroke': '0.2px #fff'
                },
                '& .name': {
                    'font-size': '12px',
                    color: '#707070',
                    '& .required': {
                        color: 'var(--mscb-danger)'
                    }
                },
                '& .code': {
                    'font-size': '14px',
                    'font-weight': 500
                },
                '& > div': {
                    width: '100%'
                },
                '& svg:last-child': {
                    'align-self': 'center',
                    width: '25px',
                    height: '25px',
                    color: '#d5d5d5',
                    '&.done': {
                        color: '#1a9b06'
                    }
                },
                '&.active': {
                    border: 'solid 1px var(--mscb-primary)'
                }
            }
        }
    }
}));

export default styleMetadataList;