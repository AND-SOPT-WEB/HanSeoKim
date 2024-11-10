/** @jsxImportSource @emotion/react */

import { useState } from "react";
import Name from "./funnelContents/Name";
import Password from "./funnelContents/Password";
import Hobby from "./funnelContents/Hobby";
import { Theme } from "../../styles/theme";
import { headerStyle } from "./SignUpPage.style";
import { signupStyle } from "./SignUpPage.style";
import { funnelPstyle } from "./funnelContents/funnelContents.style";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [step, setStep] = useState("이름");
  console.log(step);
  return (
    <>
      <main css={signupStyle}>
        <h1 css={headerStyle(Theme)}>회원가입</h1>
        {step === "이름" && <Name onClick={() => setStep("비밀번호")}></Name>}
        {step === "비밀번호" && (
          <Password onClick={() => setStep("취미")}></Password>
        )}
        {step === "취미" && <Hobby></Hobby>}
      </main>
      <p css={funnelPstyle}>
        이미 회원이신가요? <Link to="/">로그인</Link>
      </p>
    </>
  );
};

export default SignUpPage;
