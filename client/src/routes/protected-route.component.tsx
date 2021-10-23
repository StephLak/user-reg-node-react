import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { User } from "../redux/user/user.types";
import { AppStateTypes } from "../redux/root.reducer";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Spinner } from "@chakra-ui/react";

type ProtectedRouteProps = {
  isLoading?: boolean;
  redirectUrl?: string;
};

type Props = ProtectedRouteProps & LinkStateProps & RouteProps;

const ProtectedRoute: React.FC<Props> = ({
  isLoading = false,
  currentUser,
  redirectUrl = "/login",
  ...otherProps
}) => {
  if (isLoading) return <Spinner size="xl" />;

  if (!currentUser && !isLoading) return <Redirect to={redirectUrl} />;

  return <Route {...otherProps} />;
};

type LinkStateProps = {
  currentUser: User;
};

const mapStateToProps = createStructuredSelector<AppStateTypes, LinkStateProps>(
  {
    currentUser: selectCurrentUser,
  }
);

export default connect(mapStateToProps)(React.memo(ProtectedRoute));
