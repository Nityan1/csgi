import Input from "@mui/material/Input";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";

const FormInput = (props) => {
  return (
    <div className="w-full">
      <FormControl variant="standard" fullWidth margin="dense">
        <InputLabel htmlFor="component-error" className="">
          {props.label}
        </InputLabel>
        <Input
          id={props.id}
          aria-describedby="component-error-text"
          onChange={()=>{}}
        />
        <FormHelperText>*Required</FormHelperText>
      </FormControl>
      
    </div>

);
};

export default FormInput;