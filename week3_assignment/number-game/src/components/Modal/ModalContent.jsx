/** @jsxImportSource @emotion/react */
import { modalStyle, buttonStyle } from "./ModalContent.style";

const ModalContent = ({ handleReset }) => {
  let userData = JSON.parse(localStorage.getItem("gameDatas"));

  return (
    <div className="modal" css={modalStyle}>
      <div>
        <p>게임 종료!</p>
        <p>기록: {userData[userData.length - 1].playTime} </p>
      </div>
      <div>
        <button
          onClick={() => {
            handleReset();
          }}
          css={buttonStyle}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
