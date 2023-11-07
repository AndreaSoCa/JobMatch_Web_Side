import { createSlice } from "@reduxjs/toolkit";
import { TUserDataResponse } from "../../types";

export const DEFAULT_USER_STATE: TUserDataResponse = {
  email: "",
  id: null,
  phone_number: "",
  worker_last_name: "",
  worker_name: "",
};

const persistedState = localStorage.getItem("__user__");
const initialAuthState = persistedState ? JSON.parse(persistedState) : null;

const initialState: TUserDataResponse = initialAuthState || DEFAULT_USER_STATE;


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editUser: (_state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const { editUser } = userSlice.actions;
export default userSlice.reducer;
