import { api } from "../axios";
import axios from "axios";

interface SignInData {
  username: string;
  password: string;
  isSuccess: boolean;
}

const getUserToken = async ({ username, password }: SignInData) => {
  const signInReqBody = {
    username: username,
    password: password,
  };
  try {
    const response = await api.post("/login", signInReqBody);
    if (response.data.result.token) {
      return response.data.result.token;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    }
  }
};

export default getUserToken;
