import axios from "axios";
import { USERS_BASE_URL } from "../constants/constants";

export const getUsers = async () => {
  const res = await axios.get(USERS_BASE_URL);
  return res?.data;
};
