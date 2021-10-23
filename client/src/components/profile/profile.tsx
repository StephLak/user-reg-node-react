import { Avatar, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AppStateTypes } from "../../redux/root.reducer";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { User } from "../../redux/user/user.types";
import { BorderRadius, BoxShadow, COLORS } from "../../styles/theme";
import ProfileItem from "./profile-item";

type Props = LinkStateProps;

const Profile: React.FC<Props> = ({ currentUser }) => {
  return (
    <Flex w="100%" align="center" justify="center">
      <Flex
        flexDir="column"
        minH="25rem"
        w={{ base: "85%", sm: "70%", md: "60%", lg: "50%" }}
        bgColor="white"
        borderRadius={BorderRadius}
        mt={{ base: "25%", sm: "20%", md: "15%" }}
        boxShadow={BoxShadow}
      >
        <Box
          h="0.5rem"
          w="100%"
          bgColor={COLORS.PRIMARY_COLOR}
          borderRadius="5px 5px 0 0"
        />
        <Flex flexDir="column" w="100%" h="98%" px="10%" pt="5rem">
          <Flex h="3rem" align="center">
            <Avatar
              name={currentUser?.name}
              size="xl"
              bg={COLORS.PRIMARY_COLOR}
              color="white"
            />
            <Box
              ml="0.6rem"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontWeight="semibold"
            >
              {currentUser?.name}
            </Box>
          </Flex>
          <Flex ml={{ base: "15%", sm: "25%" }} mt="3rem" flexDir="column">
            <ProfileItem title="Email" value={currentUser?.email} />
            <ProfileItem title="Age" value={`${currentUser?.age} years`} />
            <ProfileItem title="Phone Number" value={currentUser?.phone} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

type LinkStateProps = {
  currentUser: User;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    currentUser: selectCurrentUser,
  }
);

export default connect(mapStateToProps)(Profile);
