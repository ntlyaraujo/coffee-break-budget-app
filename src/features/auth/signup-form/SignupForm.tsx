import { useState } from "react";
import {
  Paper,
  Typography,
  InputAdornment,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import {
  UserPlus,
  User,
  Mail,
  EyeOff,
  Eye,
  Link,
  LockIcon,
} from "lucide-react";
import type { FormData } from "../types";
import useValidationForm from "../hooks/useValidationForm";
import { TextInput } from "@/components";
import { useTheme } from "@mui/material/styles";

const SignupForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { errors, setErrors, validateForm } = useValidationForm({
    formData,
    setFormData,
  });

  const handleInputChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // TODO: Implement actual signup logic here
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle successful signup (redirect, show success message, etc.)
      alert("Account created successfully!");
    } catch (error) {
      console.error("Signup error:", error);
      // Handle error (show error message, etc.)
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <UserPlus
            size={32}
            style={{ marginRight: 8, color: theme.palette.primary.main }}
          />
          <Typography component="h1" variant="h4" fontWeight="bold">
            Create Account
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Join us to start managing your coffee break budget
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Name Fields Row */}
          <TextInput
            required
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="given-name"
            value={formData.fullName}
            onChange={handleInputChange("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName}
            startAdornment={
              <InputAdornment position="start">
                <User size={20} color={theme.palette.text.primary} />
              </InputAdornment>
            }
            placeholder="Enter your full name"
          />

          {/* Email Field */}
          <TextInput
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            error={!!errors.email}
            helperText={errors.email}
            startAdornment={
              <InputAdornment position="start">
                <Mail size={20} color={theme.palette.text.primary} />
              </InputAdornment>
            }
            placeholder="Enter your email address"
          />

          {/* Password Field */}
          <TextInput
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleInputChange("password")}
            error={!!errors.password}
            helperText={errors.password}
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
                    <EyeOff size={20} color={theme.palette.text.secondary} />
                  ) : (
                    <Eye size={20} color={theme.palette.text.secondary} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Enter your password"
          />

          {/* Confirm Password Field */}
          <TextInput
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            startAdornment={
              <InputAdornment position="start">
                <LockIcon size={20} color={theme.palette.text.primary} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} color={theme.palette.text.primary} />
                  ) : (
                    <Eye size={20} color={theme.palette.text.primary} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Confirm your password"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Create Account
          </Button>

          {/* Sign In Link */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="/auth/signin">Sign in here</Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignupForm;
