import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const mypageHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  font-size: ${Theme.text.medium.fontSize};
  background-color: ${Theme.color.lightGray_1};
  color: ${Theme.color.white};
  font-weight: 300;

  .mypage {
    font-weight: 600;
    margin-right: 2rem;
  }

  .header_left {
    display: flex;
    gap: 1rem;
  }

  & p {
    cursor: pointer;
  }
`;

export const mypageText = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  h1 {
    display: flex;
    justify-content: center;
    margin: 2rem;
    font-size: ${Theme.text.large.fontSize};
    color: ${Theme.color.lightGray_3};
  }
  h2 {
    align-self: start;
    margin-left: 3.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: ${Theme.text.large.fontSize};
    color: ${Theme.color.lightGray_3};
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const mypageInput = css`
  padding: 0.5rem;
  width: 20rem;
  border: 1px solid ${Theme.color.lightGray_1};
  border-radius: 5px;
  margin-bottom: 0.5rem;
  ::placeholder {
    color: ${Theme.color.lightGray_3};
  }
`;

export const mypageBtn = css`
  width: 100%;
  padding: 0.7rem 1rem;
  margin-bottom: 0.5rem;
  color: ${Theme.color.white};
  background-color: ${Theme.color.lightGray_1};
  border: 0px solid;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: ${Theme.color.lightGray_3};
    transition: all 1s;
  }
`;