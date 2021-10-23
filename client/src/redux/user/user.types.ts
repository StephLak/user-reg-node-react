export enum UserActionTypesEnums {
  SET_CURRENT_USER = "SET_CURRENT_USER",
}

export interface IUser {
  name: string;
  email: string;
  age: number;
  phone: string;
}

export type User = IUser | null;

export type SetCurrentUser = {
  type: UserActionTypesEnums.SET_CURRENT_USER;
  payload: User;
};

export type UserActionsTypes = SetCurrentUser;
