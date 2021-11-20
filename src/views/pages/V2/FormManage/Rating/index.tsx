import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import { Rating, Slider, Stack,Box } from "@mui/material";
import Input from "views/components/base/Input";
import  Checkbox  from 'views/components/base/Checkbox';
import {  useTranslation } from 'react-i18next';
import  Typography  from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
// import InputDebounce from "views/components/base/InputDebounce";

import manageRatingStyle from "./style";
import Radio from "views/components/base/Radio";

interface FormManageRatingProps {
  className?: string;
}
interface FormManageRatingRef {}

interface FormManageRatingComponent
  extends ForwardRefRenderFunction<
    FormManageRatingRef,
    FormManageRatingProps
  > {}

const FormManageRating: FormManageRatingComponent = (props, ref) => {

  const { className } = props;

  const { t } = useTranslation();

  const classes = manageRatingStyle();

  const manageRatingClass = clsx(classes.root, "formManage-rating", className);
  const [value, setValue] = useState<number | string | Array<number | string>>(300000,);
  // const valuetext=(value: number)=> {
  //   return `123`;
  // }
  const marks = [
    {
      value: 1000000,
      label: '1.000.000',
    },
  ];
  // function calculateValue(value: number) {
  //   return value *100;
  // }

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? 0 : parseFloat(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000000) {
      setValue(1000000);
    }
  };

  return (
    <div className={manageRatingClass}>
      <Grid container>
        <Grid item xs={10} className="mscb-input-type-rating">
          <Box component="div" className='mscb-rating-format-title text-upper'>
              <Typography variant="h6" color="var(--mscb-black)">I. {t('Common.Input.Format.Title')}</Typography>
          </Box>
          <Grid container>
            <Grid item xs={4}>
              <Box component="div" className='mscb-rating-label'>
                  <Typography variant="subtitle2" color="primary">1. {t('Pages.Layout.Group.Rating.Star')}</Typography>
              </Box>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
                <Rating
                  name="half-rating-read"
                  defaultValue={1.5}
                  precision={0.5}
                />
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Box component="div" className='mscb-rating-label'>
                  <Typography variant="subtitle2" color="primary">2. {t('Pages.Layout.Group.Rating.Point')}</Typography>
              </Box>
              <Box sx={{ width: '500px' }} className="rating-point">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs>
                    <Slider
                      aria-label="Rating"
                      value={typeof value === 'number' ? value : 0}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      max={1000000}
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value)=>{
                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                      }}
                      marks={marks}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      value={(value as number).toString()}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      type='number'
                      className={clsx("mscb-input", "point-range")}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box component="div" className='mscb-rating-condition-title text-upper'>
              <Typography variant="h6" color="var(--mscb-black)">II. {t('Common.Input.Condition.Title')}</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box component="div" className='mscb-rating-label'>
                  <Typography variant="subtitle2" color="primary">1. {t('Common.Input.Condition.TitleLow')}</Typography>
              </Box>
              <Input 
                className="rating-condition-max" 
                placeholder={t("Common.Enter.Numbers")} 
                label={t('Pages.Layout.Group.File.Maximum')}
                type='number'
              />
              {/* <Checkbox className="rating-condition-type" options={[{label:t('Common.Number.Interger'),value:0},{label:t('Common.Number.Real'),value:1}]}/> */}
              <Radio 
                className='rating-condition-type'
                variant="checkbox"
                options={[{label:t('Common.Number.Interger'),value:'0'},{label:t('Common.Number.Real'),value:'1'}]}
                row={true}
                value={'0'}
              />     
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default forwardRef(FormManageRating);
