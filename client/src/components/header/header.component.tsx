import { Flex, Image } from "@chakra-ui/react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentUser } from "../../redux/user/user.actions";
import { User } from "../../redux/user/user.types";
import { BoxShadow } from "../../styles/theme";
import { removeItemFromStorage, USER_TOKEN_KEY } from "../../utils/utils";
import CustomButton from "../custom-button/custom-button.component";
import LogoImage from "../../assets/images/logo.png";

type Props = LinkDispatchProps;

const Header: React.FC<Props> = ({ setCurrentUser }) => {
  const history = useHistory();
  const logout = () => {
    setCurrentUser(null);
    removeItemFromStorage({
      itemKey: USER_TOKEN_KEY,
      storage: localStorage,
    });
    history.push("/login");
  };
  return (
    <Flex
      h="4rem"
      px={{ base: "5%", sm: "10%" }}
      flexDir="row"
      justify="space-between"
      position="fixed"
      w="100%"
      boxShadow={BoxShadow}
      zIndex={1}
      align="center"
      bgColor="white"
    >
      <Image src={LogoImage} w="5rem" />
      <CustomButton onClick={logout}>Logout</CustomButton>
    </Flex>
  );
};

type LinkDispatchProps = {
  setCurrentUser: (user: User) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
});

export default connect(null, mapDispatchToProps)(Header);
