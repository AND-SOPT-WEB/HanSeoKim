import { api } from "../axios";
import axios from "axios";

interface HobbyData {
  userToken: string;
  userNo: number;
}

const getUserHobby = async ({ userToken, userNo }: HobbyData) => {
  try {
    const response = await api.get(`/user/${userNo}/hobby`, {
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

export default getUserHobby;
