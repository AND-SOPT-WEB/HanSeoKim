import { api } from "../axios";

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
    if (error) {
      console.log(error);
    }
  }
};

export default getUserToken;
