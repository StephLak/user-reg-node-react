import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BorderRadius, BoxShadow, COLORS } from "../../styles/theme";
import LockImage from "../../assets/images/lock.png";
type Props = {
  title: string;
  subtitle: string;
  children: any;
};

const PageContent: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <Flex w={{ base: "100%", md: "77%" }} align="center" justify="center">
      <Flex
        flexDir="column"
        minH="20rem"
        w={{ base: "85%", sm: "70%", md: "60%", lg: "50%" }}
        bgColor="white"
        borderRadius={BorderRadius}
        boxShadow={BoxShadow}
      >
        <Box
          h="0.5rem"
          w="100%"
          bgColor={COLORS.PRIMARY_COLOR}
          borderRadius="5px 5px 0 0"
        />
        <Flex flexDir="column" w="100%" h="98%" px="10%" pt="2rem">
          <Flex h="3rem" align="center">
            <Image src={LockImage} w="3rem" h="3rem" />
            <Flex flexDir="column" ml="0.6rem">
              <Box fontSize="15px">{title}</Box>
              <Box mt="0.05rem" color="#384C74" fontSize="12px">
                {subtitle}
              </Box>
            </Flex>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContent;
