import { Button, ButtonProps, styled } from "@mui/material";
import Link from "next/link";

type LinkButtonProps = ButtonProps & {
  text: string;
  href: string;
};

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: theme.palette.common.black,
  fontWeight: 500,
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  border: `2px solid ${theme.palette.common.black}`,
  backgroundColor: "transparent",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "translateY(0px)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  "&:active": {
    transform: "translateY(0px)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
  },
}));

const LinkButton = ({ text, href, ...props }: LinkButtonProps) => {
  return (
    <Link href={href} passHref>
      <StyledButton {...props} size="medium">
        {text}
      </StyledButton>
    </Link>
  );
};

export default LinkButton;
