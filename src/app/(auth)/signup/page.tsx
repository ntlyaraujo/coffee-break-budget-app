"use client";

import React from "react";
import { Container } from "@mui/material";
import { SignupForm } from "@/features";
import { signup } from "./actions";

const SignUp = () => {
  return (
    <Container component="main" maxWidth="sm">
      <SignupForm onSubmit={signup} />
    </Container>
  );
};

export default SignUp;
