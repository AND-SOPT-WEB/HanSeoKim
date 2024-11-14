import { api } from "../axios";
import axios from "axios";
import { useState } from "react";
import { SEARCH_HOBBY_ERROR_MESSAGES } from "../../constants";

interface HobbyData {
  userToken: string | null;
  userNo: number;
}

const useGetUserHobby = ({ userToken, userNo }: HobbyData) => {
  const [response, setResponse] = useState("");

  const fetchData = async () => {
    if (userNo === 0) {
      return;
    }
    try {
      const { data } = await api.get(`/user/${userNo}/hobby`, {
        headers: {
          token: userToken,
        },
      });
      setResponse(data.result.hobby);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusCode = error.response?.status;
        const errorCode = error.response?.data.code || null;
        const key = `${statusCode}-${errorCode}`;
        const errorMessage = SEARCH_HOBBY_ERROR_MESSAGES[key];
        alert(errorMessage);
      }
    }
  };

  fetchData();

  return { userHobby: response };
};

export default useGetUserHobby;
