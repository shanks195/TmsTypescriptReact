import { forwardRef, ForwardRefRenderFunction, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Input from "views/components/base/Input";
import  Slider  from "@mui/material/Slider";
import { useTranslation } from "react-i18next";

import TextField from "@mui/material/TextField";
// import InputDebounce from "views/components/base/InputDebounce";
import RangeStyle from "./style";

interface FormManageRangeProps {
  className?: string;
}
interface FormManageRangeRef {}

interface FormManageRangeComponent
  extends ForwardRefRenderFunction<FormManageRangeRef, FormManageRangeProps> {}

const valuetext = (value: number) => {
  return `${value}°C`;
};

const FormManageRange: FormManageRangeComponent = (props, ref) => {
  const [start,setStart] = useState<number>(300000);
  const [end,setEnd] = useState<number>(900000);
  const [value, setValue] = useState<number[]>([start, end]);

  const { className } = props;

  const { t } = useTranslation();

  const classes = RangeStyle();

  const ManageRangeClass = clsx(classes.root, className);
  // const startRef= useRef<InputRef>(null);

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 1000000,
      label: '1.000.000',
    },
  ];

  useEffect(() => {
    setValue([start, end])
  }, [start, end])

  const handleChange = (event: Event, newValue: number | number[]) => {
    // console.log('new value', newValue)
    // setValue(newValue as number[]);
    setStart((newValue as number[])[0] as number);
    setEnd((newValue as number[])[1] as number);
  };
  
  const handleChangeStart=(event: React.ChangeEvent<HTMLInputElement>)=>{
    // console.log('~~~~~~', event.target.value);
    setStart(event.target.value === '' ? 0 : parseFloat(event.target.value));
  }

  const handleChangeEnd=(event: React.ChangeEvent<HTMLInputElement>)=>{
    // console.log('vvvvvvvvvv', event.target.value);
    setEnd(event.target.value === '' ? 0 : parseFloat(event.target.value));
  }

  const handleBlurStart = () => {
    if (value[0] < 1) {
      setStart(1);
    } else if (value[0] > 1000000) {
      setStart(1000000);
    }
  };

  const handleBlurEnd = () => {
    if (value[1] < 1) {
      setEnd(1);
    } else if (value[1] > 1000000) {
      setEnd(1000000);
    }
  };

  return (
    <div className={ManageRangeClass}>
      <Box component="div" className='mscb-range-format-title text-upper'>
          <Typography variant="h6" color="var(--mscb-black)">I. {t("Common.Input.Format.Title")}</Typography>
      </Box> 
      <Grid container>
        <Grid item xs={10}>
          <Box component="div" className='mscb-range-label'>
              <Typography variant="subtitle2" color="primary">1. {t("Pages.Layout.Group.Range")}</Typography>
          </Box>
          <Typography className="mt-2 mb-2" variant="body2">
            {t("Pages.Layout.Group.Range.SelectPrice")} (VND)
          </Typography>

          <Box component="div" className="range-format">
            <TextField
              value={start.toString()}
              onChange={handleChangeStart}
              onBlur={handleBlurStart}
              type='number'
              className={clsx("mscb-input", "mr-2")}
              placeholder={t("Common.Enter.Numbers")}
              inputProps={{ min: '1', max: end.toString() }}
            />
            <Slider
              getAriaLabel={() => "range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value)=>{
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }}
              getAriaValueText={valuetext}
              max={1000000}
              min={1}
              marks={marks}
            />
            <TextField
              value={end.toString()}
              onChange={handleChangeEnd}
              onBlur={handleBlurEnd}
              type='number'
              className={clsx("mscb-input", "ml-2")}
              placeholder={t("Common.Enter.Numbers")}
              inputProps={{ min: start.toString(), max: '1000000' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box component="div" className='mscb-range-condition-title text-upper'>
          <Typography variant="h6" color="var(--mscb-black)">II. {t("Common.Input.Condition.Title")}</Typography>
      </Box>
      <Grid container spacing={3} className="range-condition">
        <Grid item xs={6}>
          <Box component="div" className='mscb-range-label'>
              <Typography variant="subtitle2" color="primary">1. {t("Pages.Layout.Group.Range.Limit")}</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} className="range-condition-item">
              <Input
                label={t("Pages.Layout.Group.Range.Min")}
                placeholder="vd: 0"
                type="number"
              />
            </Grid>
            <Grid item xs={12} className="range-condition-item">
              <Input
                label={t("Pages.Layout.Group.Range.Max")}
                placeholder="vd: 200"
                type="number"
              />
            </Grid>
            <Grid item xs={12} className="range-condition-item">
              <Input
                label={t("Pages.Layout.Group.Range.Jump")}
                placeholder="vd: 10"
                type="number"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default forwardRef(FormManageRange);
