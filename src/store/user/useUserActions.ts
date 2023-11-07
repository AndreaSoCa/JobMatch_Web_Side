import { editUser } from "./Userslice";
import { useAppDispatch } from "../../hooks/store";
import { TUserDataResponse } from "../../types";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

  const updateUser = async (user: TUserDataResponse) => {
		dispatch(editUser(user))
	}

	return { updateUser };
};