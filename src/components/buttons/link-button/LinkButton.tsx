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
  "&:hover": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const LinkButton = ({ text, href, ...props }: LinkButtonProps) => {
  return (
    <StyledButton href={href} {...props} size="medium">
      <Link style={{ textDecoration: "none", color: "inherit" }} href={href}>
        {text}
      </Link>
    </StyledButton>
  );
};

export default LinkButton;
