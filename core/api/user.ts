import axios from "axios";

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
  console.log(result);
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
