import { AppStateTypes } from "../root.reducer";
import { createSelector } from "reselect";

const selectUserReducer = (state: AppStateTypes) => state.userReducer;

export const selectCurrentUser: any = createSelector(
	[selectUserReducer],
	(userReducer) => userReducer.currentUser
);

// export const selectIsFetchingUserLocation = createSelector(
//   [selectUserReducer],
//   (userReducer) => userReducer.isFetchingUserLocation
// );

// export const selectFetchUserLocationError = createSelector(
//   [selectUserReducer],
//   (userReducer) => userReducer.fetchUserLocationError
// );

// export const selectUserLocation = createSelector(
//   [selectUserReducer],
//   (userReducer) => userReducer.userLocation
// );

// export const selectUserCurrency = createSelector(
//   [selectUserReducer],
//   (userReducer) => userReducer.userCurrency
// );

// export const selectUserCountryCode = createSelector(
//   [selectUserLocation],
//   (userLocaton) => userLocaton?.countryCode
// );
