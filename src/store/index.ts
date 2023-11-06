import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import authLocalStorageMiddleware from "./auth/authMiddleware";

const rootReducer = combineReducers({
  auth: authReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: [authLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch