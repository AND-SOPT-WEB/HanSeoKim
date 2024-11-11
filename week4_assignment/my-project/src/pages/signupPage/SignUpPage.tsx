/** @jsxImportSource @emotion/react */

import { ChangeEvent, useState } from "react";
import Name from "../../components/funnelContents/Name";
import Password from "../../components/funnelContents/Password";
import Hobby from "../../components/funnelContents/Hobby";
import { Theme } from "../../styles/theme";
import { headerStyle } from "./SignUpPage.style";
import { signupStyle } from "./SignUpPage.style";
import { funnelPstyle } from "../../components/funnelContents/funnelContents.style";
import { Link } from "react-router-dom";
import postSignUpMember from "../../libs/apis/postSignUpMember";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [step, setStep] = useState("이름");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
    confirmPwd: "",
    hobby: "",
  });

  const { username, password, confirmPwd, hobby } = userInputs;

  const handleSaveInputValue = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    switch (type) {
      case "ID":
        setUserInputs((prev) => ({ ...prev, username: e.target.value }));
        setDisabled(e.target.value.length <= 0);
        break;
      case "PASSWORD":
        setUserInputs((prev) => ({ ...prev, password: e.target.value }));
        setDisabled(e.target.value.length <= 0 || confirmPwd.length <= 0);
        break;
      case "CONFIRM":
        setUserInputs((prev) => ({ ...prev, confirmPwd: e.target.value }));
        setDisabled(e.target.value.length <= 0 || password.length <= 0);
        break;
      case "HOBBY":
        setUserInputs((prev) => ({ ...prev, hobby: e.target.value }));
        setDisabled(e.target.value.length <= 0);
        break;
    }
  };

  const handleClickSignUpBtn = async () => {
    const userNo = await postSignUpMember({
      username,
      password,
      hobby,
      isSuccess: false,
    });

    if (userNo) {
      alert(`회원가입 성공! 회원번호: ${userNo}`);
      navigate("/");
    }
  };

  return (
    <>
      <main css={signupStyle}>
        <h1 css={headerStyle(Theme)}>회원가입</h1>
        {step === "이름" && (
          <Name
            handleSaveInputValue={handleSaveInputValue}
            onClick={() => {
              setStep("비밀번호");
              setDisabled(true);
            }}
            disabled={disabled}
          ></Name>
        )}
        {step === "비밀번호" && (
          <Password
            handleSaveInputValue={handleSaveInputValue}
            disabled={disabled}
            onClick={() => {
              setStep("취미");
              setDisabled(true);
            }}
          ></Password>
        )}
        {step === "취미" && (
          <Hobby
            handleSaveInputValue={handleSaveInputValue}
            disabled={disabled}
            handleClickSignUpBtn={handleClickSignUpBtn}
          ></Hobby>
        )}
      </main>
      <p css={funnelPstyle}>
        이미 회원이신가요? <Link to="/">로그인</Link>
      </p>
    </>
  );
};

export default SignUpPage;
