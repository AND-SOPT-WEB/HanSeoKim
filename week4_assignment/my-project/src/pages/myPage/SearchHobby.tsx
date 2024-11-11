/** @jsxImportSource @emotion/react */
import { mypageInput } from "./MyPage.style";
import Button from "../../components/common/Button/Button";
import useGetMyHobby from "../../libs/apis/useGetMyHobby";
import { hobbyPstyle } from "./MyPage.style";

const SearchHobby = () => {
  const myToken = localStorage.getItem("userToken");

  const { response, error } = useGetMyHobby(myToken);

  return (
    <>
      <h1>취미</h1>
      <h2>나의 취미</h2>
      <p css={hobbyPstyle}>{response}</p>
      <h2>다른 사람들의 취미</h2>
      <div className="search_sec">
        <input css={mypageInput} type="text" placeholder="사용자 번호" />
        <Button type="button">검색</Button>
      </div>
    </>
  );
};

export default SearchHobby;
