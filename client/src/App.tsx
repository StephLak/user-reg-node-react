import "./App.css";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import { User } from "./redux/user/user.types";
import { bindActionCreators, Dispatch } from "redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { AppStateTypes } from "./redux/root.reducer";
import { selectCurrentUser } from "./redux/user/user.selector";
import { connect } from "react-redux";
import { customTheme } from "./styles/theme";
import { Route, Switch } from "react-router-dom";
import { BaseRoutes } from "./routes/route.component";
import ProtectedRoute from "./routes/protected-route.component";
import UnProtectedRoute from "./routes/unprotected-route.component";

const App = () => {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Switch>
        {BaseRoutes.map(({ isProtected, isUnProtected, ...otherProps }) => {
          if (isProtected) return <ProtectedRoute {...otherProps} />;

          if (isUnProtected) return <UnProtectedRoute {...otherProps} />;

          return <Route {...otherProps} />;
        })}
      </Switch>
    </ChakraProvider>
  );
};

type LinkDispatchProps = {
  setCurrentUser: (user: User) => void;
};

type LinkStateProps = {
  currentUser: User;
};

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
});

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    currentUser: selectCurrentUser,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
