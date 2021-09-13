import { ForwardRefRenderFunction, useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxAllProps {}

interface CheckboxAllRef {}

interface CheckboxAllComponent
  extends ForwardRefRenderFunction<CheckboxAllRef, CheckboxAllProps> {}

const CheckboxAll: CheckboxAllComponent = (props, ref) => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  // const listChild=[{
  //   label:"child1",value:1
  // }]
  return (
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label="Child 2"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
      </Box>
    </div>
  );
};
export default CheckboxAll;
