import { api } from "../axios";
import axios from "axios";

const getMyHobby = async (userToken: string) => {
  try {
    const response = await api.get("/user/my-hobby", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return response.data.result.hobby;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.response);
    }
  }
};

export default getMyHobby;
