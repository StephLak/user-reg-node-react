import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

import { ROOT_REDUX_PERSIST_KEY } from "../utils/utils";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: ROOT_REDUX_PERSIST_KEY,
  storage: sessionStorage,
  whitelist: ["userReducer"],
};

const rootReducer = combineReducers({
  userReducer,
});

export type AppStateTypes = ReturnType<typeof rootReducer>;

export default rootReducer;

export const persistedReducer = persistReducer(persistConfig, rootReducer);
