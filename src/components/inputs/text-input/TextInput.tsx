import { FormControl, FormHelperText, InputBaseProps } from "@mui/material";

import { getTokens } from "@/app/tokens";
import { StyledInput, StyledInputLabel } from "./TextInput.styles";

type Props = InputBaseProps & {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
};

const TextInput = ({ label, required, helperText, error, ...props }: Props) => {
  return (
    <FormControl fullWidth required={required} error={error}>
      {label && (
        <StyledInputLabel shrink htmlFor={props.id}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInput {...props} />
      {helperText && (
        <FormHelperText
          error={error}
          sx={(theme) => {
            const tokens = getTokens(theme.palette.mode);
            return {
              fontSize: tokens.typography.fontSize.xs,
              marginTop: tokens.spacing.xs / 8,
              color: error
                ? tokens.colors.semantic.error
                : tokens.colors.text.secondary,
            };
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextInput;
