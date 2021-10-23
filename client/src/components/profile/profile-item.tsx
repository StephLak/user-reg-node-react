import { Box, Flex } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  value: string | number | undefined;
};

const ProfileItem: React.FC<Props> = ({ title, value }) => {
  return (
    <Flex align="center" mt="1rem">
      <Box
        align="center"
        fontSize={{ base: "xs", md: "sm", lg: "sm" }}
        mr="1rem"
      >
        {title}:
      </Box>
      <Box>{value}</Box>
    </Flex>
  );
};

export default ProfileItem;
