import { makeStyles } from "@mui/styles";
const manageRatingStyle= makeStyles(()=>({
    root:{
        paddingLeft:"30px",
        '& .MuiTypography-h6':{
            fontSize: '16px',
            lineHeight: '20px'
        },
        '& .mscb-rating-format-title':{
            paddingTop: '10.5px',
            paddingBottom: '5px'
        },
        '& .mscb-rating-condition-title':{
            paddingTop: '30px',
            paddingBottom: '5px'
        },
        '& .mscb-rating-label':{
            padding: '5px 0 15px 0',
        },
        '& .MuiTypography-subtitle2':{
            fontWeight: 600,
        },
        "& .rating-condition-max":{
            flexDirection:"row",
            alignItems:"center",
            "& label":{
                marginRight:"18px",
                marginTop:"4px",
                display: 'flex',
                alignItems: 'center',
                fontSize:"14px",
            },
            '& input': {
                '&::placeholder': {
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '14px'
                }
            }
        },
        "& .rating-condition-type":{
            marginLeft:"65px",
            "& span.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label": {
                fontSize: '14px',
            },
        },
        "& .rating-point":{
            display:"flex",
            // width:"100%",
            "& .point-range":{
                width:"55%",
                marginLeft:"15%",
                marginTop: "-12%",
                "& input.MuiOutlinedInput-input.MuiInputBase-input": {
                    padding: "8px 16px",
                }
            },
            "& .MuiSlider-colorPrimary":{
                // border: "solid 3px #fff",
                color:"#1e93ec !important",
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
                    fontSize: "16px",
                }
            }
        }
    }
}))
export default manageRatingStyle