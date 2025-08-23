"use client";
import { Box, Stack } from "@mui/material";
import { LinkButton } from "@/components";
import {
  StyledHeroChip,
  StyledHeroDescription,
  StyledHeroSection,
  StyledHeroTitle,
  StyledGradientLinkButton,
} from "./styles";

const Home = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <StyledHeroSection>
        <Stack spacing={3} alignItems="center">
          <StyledHeroChip
            label="Office Expenses Made Simple"
            color="primary"
            variant="outlined"
          />

          <StyledHeroTitle variant="h1">
            Your Coffee Break Buddy
          </StyledHeroTitle>

          <StyledHeroDescription variant="h2">
            Take control of your office expenses — simple, smart, and
            stress-free.
          </StyledHeroDescription>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <StyledGradientLinkButton
              text="Get Started Free"
              href="/auth/signup"
              variant="contained"
              size="large"
            />
            <LinkButton
              text="Sign In"
              href="/auth/signin"
              variant="outlined"
              size="large"
              sx={{ minWidth: 160, py: 1.5, fontSize: "1rem" }}
            />
          </Stack>
        </Stack>
      </StyledHeroSection>
    </Box>
  );
};

export default Home;
