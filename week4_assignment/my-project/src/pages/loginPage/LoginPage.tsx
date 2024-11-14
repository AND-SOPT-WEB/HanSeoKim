/** @jsxImportSource @emotion/react */

import { loginPageStyle } from "./LoginPage.style";
import { Theme } from "../../styles/theme";
import { inputStyle, headerStyle, pStyle } from "./LoginPage.style";
import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import Button from "../../components/common/Button/Button";
import getUserToken from "../../libs/apis/getUserToken";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  userId: string;
  password: string;
}
const LoginPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userId: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickLoginBtn = async () => {
    const token = await getUserToken(userInfo);
    localStorage.setItem("userToken", token);
    if (token) {
      navigate("/mypage");
    }
  };

  return (
    <>
      <div css={loginPageStyle}>
        <header css={headerStyle(Theme)}>
          <h1>로그인</h1>
        </header>
        <div>
          <div>
            <form action="" css={inputStyle(Theme)}>
              <input
                type="text"
                placeholder="아이디"
                name="userId"
                onChange={(e) => handleChangeUserInput(e)}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={(e) => handleChangeUserInput(e)}
              />

              <Button
                type="button"
                disabled={false}
                onClick={handleClickLoginBtn}
              >
                로그인
              </Button>
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
