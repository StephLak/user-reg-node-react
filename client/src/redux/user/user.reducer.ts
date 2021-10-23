import { User, UserActionsTypes, UserActionTypesEnums } from "./user.types";

type UserReducerTypes = {
	currentUser: User;
};

const INITIAL_STATE: UserReducerTypes = {
	currentUser: null,
};

const userReducer = (
	state = INITIAL_STATE,
	action: UserActionsTypes
): UserReducerTypes => {
	switch (action.type) {
		case UserActionTypesEnums.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
