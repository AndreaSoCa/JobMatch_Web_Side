import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import userReducer from './user/Userslice';
import authLocalStorageMiddleware from "./auth/authMiddleware";
import { userLocalStorageMiddleware } from "./user/UserMiddleware";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: [authLocalStorageMiddleware, userLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch