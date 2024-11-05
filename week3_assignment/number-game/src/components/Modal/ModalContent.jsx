/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ModalContent = ({ handleReset }) => {
  let userData = JSON.parse(localStorage.getItem("gameDatas"));
  console.log(userData);
  return (
    <div className="modal" css={modalStyle}>
      <p>게임 종료!</p>
      <p>기록: {userData[userData.length - 1].playTime} </p>
      <button
        onClick={() => {
          handleReset();
        }}
      >
        확인
      </button>
    </div>
  );
};

export default ModalContent;

const modalStyle = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: absolute;
  width: 250px;
  top: 70px;
  left: calc(50% - 125px);
  bottom: 70px;
`;
