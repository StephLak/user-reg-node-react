import { SetCurrentUser, User, UserActionTypesEnums } from "./user.types";

export const setCurrentUser = (user: User): SetCurrentUser => ({
	type: UserActionTypesEnums.SET_CURRENT_USER,
	payload: user,
});
