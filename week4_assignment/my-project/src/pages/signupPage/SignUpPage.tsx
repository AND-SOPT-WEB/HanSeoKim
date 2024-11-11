/** @jsxImportSource @emotion/react */

import { ChangeEvent, useState, useEffect } from "react";
import Name from "../../components/funnelContents/Name";
import Password from "../../components/funnelContents/Password";
import Hobby from "../../components/funnelContents/Hobby";
import { Theme } from "../../styles/theme";
import { headerStyle, signupStyle } from "./SignUpPage.style";

import { funnelPstyle } from "../../components/funnelContents/funnelContents.style";
import { Link, useNavigate } from "react-router-dom";
import postSignUpMember from "../../libs/apis/postSignUpMember";

const SignUpPage = () => {
  const [step, setStep] = useState("이름");
  const [disabled, setDisabled] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({
    username: "",
    password: "",
    confirmPwd: "",
    hobby: "",
  });

  const { username, password, confirmPwd, hobby } = userInputs;

  //비밀번호 확인 로직
  useEffect(() => {
    setIsError(false);
    if (password.length > 8 || confirmPwd.length > 8) {
      setDisabled(true);
      setIsError(true);
    } else if (password && confirmPwd && password !== confirmPwd) {
      setDisabled(true);
    } else if (password && confirmPwd) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPwd]);

  const handleSaveInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const inputLength = value.length;

    setUserInputs((prev) => ({ ...prev, [name]: value }));

    if (name === "username" || name === "hobby") {
      setDisabled(inputLength === 0 || inputLength > 8);
      setIsError(inputLength > 8);
    }
  };

  const handleClickSignUpBtn = () => {
    const userNo = postSignUpMember({
      username,
      password,
      hobby,
    });

    if (typeof userNo === "number") {
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
              setIsError(false);
            }}
            disabled={disabled}
            isError={isError}
          ></Name>
        )}
        {step === "비밀번호" && (
          <Password
            handleSaveInputValue={handleSaveInputValue}
            disabled={disabled}
            onClick={() => {
              setStep("취미");
              setDisabled(true);
              setIsError(false);
            }}
            isError={isError}
            userInputs={userInputs}
          ></Password>
        )}
        {step === "취미" && (
          <Hobby
            handleSaveInputValue={handleSaveInputValue}
            disabled={disabled}
            handleClickSignUpBtn={handleClickSignUpBtn}
            isError={isError}
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
