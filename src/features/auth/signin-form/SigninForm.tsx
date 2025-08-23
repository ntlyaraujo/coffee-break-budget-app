"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import {
  LogIn,
  Mail,
  EyeOff,
  Eye,
  Link,
  LockIcon,
} from "lucide-react";
import { TextInput } from "@/components";
import { useTheme } from "@mui/material/styles";
import { FormDataSignin } from "../types";
import { StyledFormContainer, StyledFormPaper } from "../styles";

type SigninFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

const SigninForm: React.FC<SigninFormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataSignin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmitForm = async (data: FormDataSignin) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Signin error:", error);
    }
  };

  return (
    <StyledFormContainer>
      <StyledFormPaper elevation={3}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <LogIn
            size={32}
            style={{ marginRight: 8, color: theme.palette.primary.main }}
          />
          <Typography component="h1" variant="h4" fontWeight="bold">
            Welcome Back
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Sign in to continue managing your coffee break budget
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmitForm)}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <Mail size={20} color={theme.palette.text.primary} />
                  </InputAdornment>
                }
                placeholder="Enter your email address"
              />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon size={20} color={theme.palette.text.primary} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? (
                        <EyeOff
                          size={20}
                          color={theme.palette.text.secondary}
                        />
                      ) : (
                        <Eye size={20} color={theme.palette.text.secondary} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Enter your password"
              />
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>

          {/* Sign Up Link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="/auth/signup">Create one here</Link>
            </Typography>
          </Box>
        </Box>
      </StyledFormPaper>
    </StyledFormContainer>
  );
};

export default SigninForm;