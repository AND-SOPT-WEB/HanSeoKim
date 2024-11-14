/** @jsxImportSource @emotion/react */
import { mypageInput } from "../pages/myPage/MyPage.style";
import Button from "./common/Button/Button";
import useGetMyHobby from "../libs/apis/useGetMyHobby";
import useGetUserHobby from "../libs/apis/useGetUserHobby";
import { hobbyPstyle } from "../pages/myPage/MyPage.style";
import { useState } from "react";

const SearchHobby = () => {
  const [userNo, setUserNo] = useState(0);
  const [hobby, setHobby] = useState("");

  const userToken = localStorage.getItem("userToken");

  const { myHobby, myError } = useGetMyHobby(userToken);
  const { userHobby, userError } = useGetUserHobby({ userToken, userNo });

  const handleClickSearch = () => {
    if (userError) {
      alert(userError);
    }
    if (userHobby) {
      setHobby(userHobby);
    }
  };

  return (
    <>
      <h1>취미</h1>
      <h2>나의 취미</h2>
      <p css={hobbyPstyle}>{myHobby}</p>
      <h2>다른 사람들의 취미</h2>
      <div className="search_sec">
        <input
          css={mypageInput}
          type="text"
          placeholder="사용자 번호"
          onChange={(e) => setUserNo(Number(e.target.value))}
        />
        <Button type="button" onClick={handleClickSearch}>
          검색
        </Button>
      </div>
      {hobby && (
        <p css={hobbyPstyle}>
          {userNo}번 사용자의 취미: {hobby}
        </p>
      )}
    </>
  );
};

export default SearchHobby;
