import { Box, Paper, styled } from "@mui/material";

export const StyledFormContainer = styled(Box)(({ theme }) => {
    return {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingY: theme.spacing(4),
    };
  });
  
  export const StyledFormPaper = styled(Paper)(({ theme }) => {
    return {
      padding: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }
  });