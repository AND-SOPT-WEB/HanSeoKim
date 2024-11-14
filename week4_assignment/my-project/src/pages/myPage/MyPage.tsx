/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { mypageHeaderStyle } from "./MyPage.style";
import MyInfo from "../../components/MyInfo";
import SearchHobby from "../../components/SearchHobby";
import { mypageText } from "./MyPage.style";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [switchTab, setSwitchTab] = useState("취미");
  const navigate = useNavigate();

  const handleClickLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <>
      <div>
        <header css={mypageHeaderStyle}>
          <div className="header_left">
            <p className="mypage">마이페이지</p>
            <p onClick={() => setSwitchTab("취미")}>취미</p>
            <p onClick={() => setSwitchTab("정보")}>내 정보</p>
          </div>
          <div>
            <button className="logout_btn" onClick={handleClickLogout}>
              로그아웃
            </button>
          </div>
        </header>
        <main css={mypageText}>
          {switchTab === "취미" && <SearchHobby></SearchHobby>}
          {switchTab === "정보" && <MyInfo></MyInfo>}
        </main>
      </div>
    </>
  );
};

export default MyPage;
