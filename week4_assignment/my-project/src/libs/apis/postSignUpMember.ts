import { api } from "../axios";
import axios from "axios";
import { SIGNUP_ERROR_MESSAGES } from "../../constants";

interface SignupData {
  username: string;
  password: string;
  hobby: string;
}

const postSignUpMember = async ({ username, password, hobby }: SignupData) => {
  const signupReqBody = {
    username: username,
    password: password,
    hobby: hobby,
  };
  try {
    const response = await api.post("/user", signupReqBody);
    const userNo = response.data.result.no;

    if (username && password && hobby) {
      return userNo;
    } else {
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const errorCode = error.response?.data.code || null;
      const key = `${statusCode}-${errorCode}`;
      const errorMessage = SIGNUP_ERROR_MESSAGES[key];
      alert(errorMessage);
    }
  }
};
export default postSignUpMember;
