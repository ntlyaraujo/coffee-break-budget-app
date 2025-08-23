import { SigninForm } from "@/features/auth";
import { login } from "./actions";
import { Container } from "@mui/material";

const SignIn = () => {
  return (
    <Container component="main" maxWidth="sm">
      <SigninForm onSubmit={login} />
    </Container>
  );
};

export default SignIn;