import { api } from "../axios";
import axios from "axios";

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
      if (statusCode === 400) {
        const errorCode = error.response?.data?.code;
        if (errorCode === "00") {
          alert("입력값이 유효하지 않습니다.");
        } else if (errorCode === "01") {
          alert("입력값이 8자를 넘겼습니다.");
        }
      } else if (statusCode === 404) {
        alert("네트워크 오류가 발생했습니다.");
      } else if (statusCode === 409) {
        const errorCode = error.response?.data?.code;
        if (errorCode == "00") {
          alert("중복된 아이디입니다.");
        }
      }
    } else {
      alert("알 수 없는 오류가 발생했습니다.");
    }
  }
};

export default postSignUpMember;
