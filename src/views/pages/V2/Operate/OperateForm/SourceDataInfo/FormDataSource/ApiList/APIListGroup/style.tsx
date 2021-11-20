import { makeStyles } from '@mui/styles';


const APIListStyle = makeStyles(() => ({
    rootList: {
        '& .apilist-group': {
            display: 'flex',
            '& .item__plus': {
                backgroundColor: '#ffffff',
                border: 'solid 1px var(--mscb-primary)',
                transition: '0.3s all',
                '& button': {
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                },
                '& button:hover': {
                    cursor: 'pointer'
                },
                '& svg': {
                    width: '25px',
                    height: '25px',
                    color: 'var(--mscb-primary)'
                }
            },
            '& .item__plus:hover': {
                cursor: 'pointer',
                backgroundColor: 'var(--mscb-primary)',
                '& svg': {
                    color: 'var(--mscb-primary)'
                }
            },
            '& .apilist__item--label': {
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--mscb-secondary)',
                margin: '10px -15px',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                '& label': {
                    fontSize: '12px',
                    color: 'var(--mscb-color-black)'
                }
            },
            '& .apilist__item--plus': {
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '12px',
                marginRight: '12px',
                textDecoration: 'underline',
                marginTop: '18px',
                '& .item__plus': {
                    width: '50px !important',
                    height: '50px !important',
                    backgroundColor: '#eeeff5',
                    color: 'var(--mscb-white)',
                    border: 'none'
                }
            },
            '& .item__copy': {
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                marginLeft: '40px',
                height: '45px',
                marginTop: '18px',
                '& span': {
                    color: '#747792 !important',
                    fontSize: '13px',
                    textDecoration: 'underline'
                },
                '& svg': {
                    color: 'var(--mscb-danger)'
                }
            },
            '& .btn-red': {
                backgroundColor: '#eb0029',
                color: '#ffffff',
                border: 'solid 1px #eb0029'
            },
            '& .btn-red:hover': {
                backgroundColor: '#ffffff',
                borderColor: '#b6011f',
                color: '#b6011f'
            },
            '& .btn-red:focus': {
                backgroundColor: '#ffffff',
                borderColor: '#b6011f',
                color: '#b6011f'
            },
            '& .btn-blue': {
                backgroundColor: '#1825aa',
                color: '#ffffff',
                border: 'solid 1px #1825aa'
            },
            '& .btn-blue:hover': {
                backgroundColor: '#ffffff',
                borderColor: '#151f8f',
                color: '#151f8f'
            },
            '& .btn-blue:focus': {
                backgroundColor: '#ffffff',
                borderColor: '#151f8f',
                color: '#151f8f'
            }
        }
    }

})) as Function;

export default APIListStyle;