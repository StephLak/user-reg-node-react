import { Flex, Image, Text } from "@chakra-ui/react";
import SideBarSmallRectangle from "../sidebar-small-rectangles/sidebar-small-rectangle";
import BgImage from "../../assets/images/bg.png";
import LogoImage from "../../assets/images/logo.png";

const SideBar = () => {
  const customTextStyle = {
    fontSize: "12px",
    color: "#384C74",
  };
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      w="23%"
      flexDir="column"
      bg={`url(${BgImage})`}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex px="7%" py="10%" h="100%" flexDir="column" justify="space-between">
        <Image mx="auto" src={LogoImage} w="6rem" />
        <Flex flexDir="column">
          <Text
            color="#18B2D2"
            textTransform="uppercase"
            fontSize="15px"
            fontWeight="700"
          >
            Our Solution
          </Text>
          <Text mt="0.5rem" color="#384C74" fontSize="15px" fontWeight="light">
            We belive in making comunities sustainble through empowering
            artisans Refugees with the form of luxury crafts and connecting them
            with designers for skill development and get them employed.
          </Text>
          <Flex mt="1rem">
            <SideBarSmallRectangle bgColor="#18B2D2" />
            <SideBarSmallRectangle bgColor="white" />
            <SideBarSmallRectangle bgColor="white" />
          </Flex>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Text style={customTextStyle}>Privacy Policy</Text>
          <Text style={customTextStyle}>Terms & Conditions</Text>
          <Text style={customTextStyle}>Faqs</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
