import { Middleware } from "@reduxjs/toolkit";

export const userLocalStorageMiddleware: Middleware = store => next => action => {
  next(action);
  const userValue =  store.getState().user;
  localStorage.setItem("__user__", JSON.stringify(userValue));
}

// const UserMiddleware: Middleware = store => next => action => {
// 	const { type, payload } = action
// 	next(action)
// 	if (type === 'user/editUser') {
// 	}
// }

// export default UserMiddleware;