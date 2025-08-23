import { StyledMainContainer } from "./MainContainer.styles";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default MainContainer;