import axios from "axios";
import { api } from "../axios";
import { useState } from "react";
import { SEARCH_HOBBY_ERROR_MESSAGES } from "../../constants";

const useGetMyHobby = (userToken: string | null) => {
  const [response, setResponse] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await api.get("/user/my-hobby", {
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

  return { myHobby: response };
};

export default useGetMyHobby;
