import { api } from "../axios";

interface UpdateUser {
  hobby?: string;
  password?: string;
  userToken: string | null;
}

const updateUserData = async ({ hobby, password, userToken }: UpdateUser) => {
  const reqBody = {
    hobby: hobby,
    password: password,
  };
  try {
    const response = await api.put("/user", reqBody, {
      headers: {
        token: userToken,
      },
    });
    if (response.data.code === "00") {
      console.log("업데이트 실패", response.data);
    } else {
      console.log("업데이트 성공", response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default updateUserData;
