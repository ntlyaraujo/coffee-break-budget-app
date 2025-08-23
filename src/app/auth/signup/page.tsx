"use client";

import React from "react";
import { Container } from "@mui/material";
import { SignupForm } from "@/features";
import { signup } from "./actions";

const SignUp = () => {
  const handleSignup = async (formData: FormData) => {
    await signup(formData);
  };

  return (
    <Container component="main" maxWidth="sm">
      <SignupForm onSubmit={handleSignup} />
    </Container>
  );
};

export default SignUp;
