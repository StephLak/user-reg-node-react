import { Flex } from "@chakra-ui/react";
import { COLORS } from "../../styles/theme";
import PageContent from "./page-content";
import SideBar from "./side-bar";

type Props = {
  title: string;
  subtitle: string;
  children: any;
};

const AuthLayout: React.FC<Props> = ({ children, title, subtitle }) => {
  return (
    <Flex minW="100vw" minH="100vh" bgColor={COLORS.BACKGROUND_COLOR}>
      <SideBar />
      <PageContent title={title} subtitle={subtitle} children={children} />
    </Flex>
  );
};

export default AuthLayout;
