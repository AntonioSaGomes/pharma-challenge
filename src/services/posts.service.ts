import axios from "axios";
import { POSTS_BASE_URL } from "../constants/constants";
import { PostPayload } from "../models/Post";

export const getUserPostsList = async (userId: number) => {
  const res = await axios.get(POSTS_BASE_URL, {
    params: {
      userId,
    },
  });

  return res?.data;
};

export const sendPost = async (post: PostPayload) => {
  const res = await axios.post(POSTS_BASE_URL, post, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return res?.data;
};
