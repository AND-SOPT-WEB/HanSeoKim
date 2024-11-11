import { api } from "../axios";
import axios from "axios";
import { useState } from "react";

interface HobbyData {
  userToken: string | null;
  userNo: number;
}

const useGetUserHobby = ({ userToken, userNo }: HobbyData) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

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
        alert(error.response);
      }
    }
  };

  fetchData();

  return { userHobby: response, userError: error };
};

export default useGetUserHobby;
