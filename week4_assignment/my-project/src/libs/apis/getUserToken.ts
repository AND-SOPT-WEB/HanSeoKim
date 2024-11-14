import { api } from "../axios";
import axios from "axios";
import { LOGIN_ERROR_MESSAGES } from "../../constants";

interface SignInData {
  userId: string;
  password: string;
}

const getUserToken = async (userInfo: SignInData) => {
  const { userId: username, password } = userInfo;
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
      const statusCode = error.response?.status;
      const errorCode = error.response?.data.code || null;
      const key = `${statusCode}-${errorCode}`;
      const errorMessage = LOGIN_ERROR_MESSAGES[key];
      alert(errorMessage);
    }
  }
};

export default getUserToken;
