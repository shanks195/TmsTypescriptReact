import { makeStyles } from "@mui/styles";
const RangeStyle=makeStyles(()=>({
    root:{
        paddingLeft:"30px",
        '& .mscb-input-type-rating':{
        
        },
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-range-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-range-condition-title':{
            paddingTop: '55.5px',
            paddingBottom: '5px'
        },
        '& .mscb-range-label':{
            padding: '5px 0 10px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        "& .range-condition":{
            '& .MuiInputLabel-formControl':{
                fontSize: '0.875rem'
            },
            "& .range-condition-item":{
                
                "& .mscb-input":{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    "& label":{
                        width:"110px",
                        marginBottom: '0',
                    },
                    "& input.MuiInput-input.MuiInputBase-input": {
                        fontSize: '14px',
                        '&::placeholder': {
                            fontStyle: 'italic',
                            fontWeight: 300,
                            fontSize: '14px'
                        }
                    }
                }
            }
        },
        "& .range-format":{
            display:"flex",
            alignItems:"center",
            '& .mscb-input .MuiInputBase-input':{
                fontSize: '15px'
            },
            "& .mscb-input":{
                marginBottom:"0 !important",
                width:"30%",
            },
            "& input.MuiOutlinedInput-input.MuiInputBase-input": {
                padding: "8px 16px",
            },
            "& .MuiSlider-colorPrimary":{
                color:"#1e93ec !important",
                margin:"0 36px",
                "& .MuiSlider-rail": {
                    color: "#c8c6c6",
                    height: "5px",
                },
                "& .MuiSlider-mark": {
                    color: "#c8c6c6",
                },
                "& .MuiSlider-thumbColorPrimary": {
                    border: "3px solid rgb(255, 255, 255)",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px 0px",
                },
                "& .MuiSlider-markLabel": {
                    fontWeight: "500",
                    fontSize: "15px",
                }
            //     "& span":{
            //         "&:nth-child(4)":{
            //             color:"#0a0723",
            //             fontWeight:500,
            //             left:"-2% !important"
            //         },
            //         "&:nth-child(6)":{
            //             color:"#0a0723",
            //             fontWeight:500,
            //             left:"90% !important"
            //         }
            //     }
            }
        }
    }
}))
export default RangeStyle