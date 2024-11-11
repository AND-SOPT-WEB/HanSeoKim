import axios from "axios";
import { api } from "../axios";
import { useState } from "react";

const useGetMyHobby = (userToken: string | null) => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await api.get("/user/my-hobby", {
        headers: {
          token: userToken,
        },
      });
      setResponse(data.result.hobby);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err);
      }
    }
  };

  fetchData();

  return { myHobby: response, myError: error };
};

export default useGetMyHobby;
