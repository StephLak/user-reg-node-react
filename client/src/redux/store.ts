import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistedReducer } from "./root.reducer";
import { persistStore } from "redux-persist";

const middleWares: any[] = [];

if (process.env.NODE_ENV === "development") middleWares.push(logger);

export const store: any = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);

export const persistor = persistStore(store);
