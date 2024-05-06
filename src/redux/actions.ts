import { User } from "./types";
export const SET_USER = 'SET_USER';

export const setUser = (user : User) => ({
  type: SET_USER,
  payload: user,
});
