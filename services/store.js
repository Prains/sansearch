import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./reducers/ui/uiReducer";
import userReducer from "./reducers/User";

const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
