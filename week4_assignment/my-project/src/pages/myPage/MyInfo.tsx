/** @jsxImportSource @emotion/react */
import { mypageInput } from "./MyPage.style";
import Button from "../../components/common/Button/Button";

const MyInfo = () => {
  return (
    <>
      <h1>내 정보 수정하기</h1>
      <h2>새 비밀번호</h2>
      <div className="search_sec">
        <input css={mypageInput} type="text" />
      </div>

      <h2>새 취미</h2>
      <div className="search_sec">
        <input css={mypageInput} type="text" />
        <Button type="button">수정하기</Button>
      </div>
    </>
  );
};

export default MyInfo;
