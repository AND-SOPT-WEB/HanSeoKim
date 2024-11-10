/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { mypageHeaderStyle } from "./MyPage.style";
import MyInfo from "./MyInfo";
import SearchHobby from "./SearchHobby";
import { mypageText } from "./MyPage.style";

const MyPage = () => {
  const [switchTab, setSwitchTab] = useState("취미");

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
            <p>로그아웃</p>
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
