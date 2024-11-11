import { api } from "../axios";

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
    const response = await api.post("/user", signupReqBody);
    const userNo = response.data.result.no;
    isSuccess = true;
    if (username && password && hobby) {
      return userNo;
    } else {
      return !isSuccess;
    }
  } catch (error) {
    if (error) {
      console.log(error);
    }
    return false;
  }
};

export default postSignUpMember;
