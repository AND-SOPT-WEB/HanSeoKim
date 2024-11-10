/** @jsxImportSource @emotion/react */

import { loginPageStyle } from "./LoginPage.style";
import { Theme } from "../../styles/theme";
import {
  inputStyle,
  buttonStyle,
  headerStyle,
  pStyle,
} from "./LoginPage.style";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div css={loginPageStyle}>
        <header css={headerStyle(Theme)}>
          <h1>로그인</h1>
        </header>
        <div>
          <div css={inputStyle(Theme)}>
            <input type="text" placeholder="아이디" />
            <input type="text" placeholder="비밀번호" />
            <form action="">
              <button type="submit" css={buttonStyle(Theme)}>
                로그인
              </button>
            </form>
            <Link to="/signup">
              <p css={pStyle(Theme)}>회원가입</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
