import React from "react";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { Route, RouteProps } from "react-router-dom";
import { User } from "../redux/user/user.types";
import { AppStateTypes } from "../redux/root.reducer";
import { selectCurrentUser } from "../redux/user/user.selector";
import { Spinner } from "@chakra-ui/react";

type UnProtectedRouteProps = {
  isLoading?: boolean;
  redirectUrl?: string;
};

type Props = UnProtectedRouteProps & LinkStateProps & RouteProps;

const UnProtectedRoute: React.FC<Props> = ({
  isLoading = false,
  currentUser,
  redirectUrl = "/",
  ...otherProps
}) => {
  if (isLoading) return <Spinner size="xl" />;

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

export default connect(mapStateToProps)(React.memo(UnProtectedRoute));
