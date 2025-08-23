import { ButtonProps } from "@mui/material";
import Link from "next/link";
import { StyledButton } from "./LinkButton.styles";

type LinkButtonProps = ButtonProps & {
  text: string;
  href: string;
};

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
