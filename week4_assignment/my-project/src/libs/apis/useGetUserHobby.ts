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
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          const errorCode = error.response?.data?.code;
          if (errorCode === "00") {
            setError("잘못된 요청 경로입니다.");
          } else if (errorCode === "01") {
            setError("존재하지 않는 사용자 번호입니다.");
          }
        } else {
          setError("네트워크 오류가 발생했습니다.");
        }
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  fetchData();

  return { userHobby: response, userError: error };
};

export default useGetUserHobby;
