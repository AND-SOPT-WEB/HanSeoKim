import { api } from "../axios";
import axios from "axios";

interface SignupData {
  username: string;
  password: string;
  hobby: string;
  isSuccess: boolean;
}

const postSignUpMember = async ({
  username,
  password,
  hobby,
  isSuccess,
}: SignupData) => {
  const signupReqBody = {
    username: username,
    password: password,
    hobby: hobby,
  };
  try {
    await api.post("/user", signupReqBody);
    isSuccess = true;
    return isSuccess;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response);
    }
  }
};

export default postSignUpMember;
