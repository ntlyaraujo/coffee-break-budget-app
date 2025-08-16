"use client";

import React from "react";
import { Container } from "@mui/material";

import { SignupForm } from "@/features";

const SignUp = () => {
  return (
    <Container component="main" maxWidth="sm">
      <SignupForm />
    </Container>
  );
};

export default SignUp;
