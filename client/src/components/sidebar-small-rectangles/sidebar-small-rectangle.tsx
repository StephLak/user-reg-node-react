import { Box } from "@chakra-ui/react";
import React from "react";

type Props = {
  bgColor: string;
};

const SideBarSmallRectangle: React.FC<Props> = ({ bgColor }) => {
  return <Box bgColor={bgColor} h="0.3rem" w="2rem" mr="0.5rem" />;
};

export default SideBarSmallRectangle;
