import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import { TextInput } from "@/components";
import { useTheme } from "@mui/material/styles";
import { FormDataSignup } from "../types";

type SignupFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormDataSignup>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmitForm = async (data: FormDataSignup) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Signup error:", error);
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
          onSubmit={handleSubmit(onSubmitForm)}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Name Field */}
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                required
                id="name"
                label="Full Name"
                name="name"
                autoComplete="given-name"
                error={!!errors.name}
                helperText={errors.name?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <User size={20} color={theme.palette.text.primary} />
                  </InputAdornment>
                }
                placeholder="Enter your full name"
              />
            )}
          />

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
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message:
                  "Password must contain uppercase, lowercase, and number",
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
                autoComplete="new-password"
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

          {/* Confirm Password Field */}
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <TextInput
                {...field}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                autoComplete="new-password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon size={20} color={theme.palette.text.primary} />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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
            {isSubmitting ? "Creating Account..." : "Create Account"}
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
