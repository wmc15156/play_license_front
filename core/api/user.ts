import axios from "axios";
import { IS_LOGIN_ERROR, IS_LOGIN_SUCCESS } from "@reducers/user";

type LoginData = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginData) => {
  const data = { email, password };
  const result = await axios.post("/auth/login", data);
  return result.data.userInfo;
};

export const loadMyInfo = async () => {
  const result = await axios.get("/auth/me");
  return result.data;
};

export const emailDuplicateCheck = (email: string) => {
  const data = axios
    .post("/auth/email/duplicate", { email, provider: "user" })
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      return err.response.status;
    });
  return data;
};

export const isLogin = async (dispatch) => {
  try {
    await axios.get("/auth/check/login");
    dispatch({
      type: IS_LOGIN_SUCCESS,
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: IS_LOGIN_ERROR,
      payload: false,
    });
  }
};
