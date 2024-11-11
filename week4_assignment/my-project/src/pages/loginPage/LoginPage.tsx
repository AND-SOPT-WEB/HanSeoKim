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
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const handleChangeUserInput = (
    e: ChangeEvent<HTMLInputElement>,
    type: "ID" | "PASSWORD"
  ) => {
    switch (type) {
      case "ID":
        setUserInfo((prev) => {
          return { ...prev, userId: e.target.value };
        });
        break;
      case "PASSWORD":
        setUserInfo((prev) => {
          return { ...prev, password: e.target.value };
        });
    }
  };

  const handleClickLoginBtn = async () => {
    const token = await getUserToken(userInfo);
    JSON.stringify(localStorage.setItem("userToken", token));
    setErrMsg("");
    navigate("/mypage");
  };

  return (
    <>
      <div css={loginPageStyle}>
        <header css={headerStyle(Theme)}>
          <h1>로그인</h1>
        </header>
        <div>
          <div css={inputStyle(Theme)}>
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => handleChangeUserInput(e, "ID")}
            />
            <input
              type="text"
              placeholder="비밀번호"
              onChange={(e) => handleChangeUserInput(e, "PASSWORD")}
            />

            <form action="" style={{ width: "100%" }}>
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
