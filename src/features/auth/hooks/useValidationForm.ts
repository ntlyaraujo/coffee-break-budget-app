import { useState } from "react";
import { FormData, FormErrors } from "../types";
import { isEmailValid, isPasswordMatch, isPasswordValid } from "../helpers";

type Props = {
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

const useValidationForm = (props: Props) => {
  const { formData, setFormData } = props;

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isEmailValid(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!isPasswordValid(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (!isPasswordMatch(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    validateForm,
  };
};

export default useValidationForm;
