/** @jsxImportSource @emotion/react */
import { mypageInput } from "../pages/myPage/MyPage.style";
import Button from "./common/Button/Button";
import updateUserData from "../libs/apis/updateUserData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const [input, setInput] = useState({
    password: "",
    hobby: "",
  });
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (userToken && (input.password || input.hobby)) {
      updateUserData({
        hobby: input.hobby,
        password: input.password,
        userToken: userToken,
      });
      alert("수정에 성공했습니다!");
      navigate("/");
    } else {
      alert("칸을 입력해주세요.");
    }
  };

  return (
    <>
      <h1>내 정보 수정하기</h1>
      <h2>새 비밀번호</h2>
      <div className="search_sec">
        <input
          name="password"
          value={input.password}
          css={mypageInput}
          type="password"
          onChange={handleInputChange}
        />
      </div>

      <h2>새 취미</h2>
      <div className="search_sec">
        <input
          onChange={handleInputChange}
          name="hobby"
          value={input.hobby}
          css={mypageInput}
          type="text"
        />
        <Button type="button" onClick={handleSubmit}>
          수정하기
        </Button>
      </div>
    </>
  );
};

export default MyInfo;
