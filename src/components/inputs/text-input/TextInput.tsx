import { InputBaseProps } from "@mui/material";

import { StyledFormControl, StyledHelperText, StyledInput, StyledInputLabel } from "./TextInput.styles";

type Props = InputBaseProps & {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
};

const TextInput = ({ label, required, helperText, error, ...props }: Props) => {
  return (
    <StyledFormControl fullWidth required={required} error={error} >
      {label && (
        <StyledInputLabel shrink htmlFor={props.id}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInput {...props} />
      {helperText && (
        <StyledHelperText error={error}>{helperText}</StyledHelperText>
      )}
    </StyledFormControl>
  );
};

export default TextInput;
