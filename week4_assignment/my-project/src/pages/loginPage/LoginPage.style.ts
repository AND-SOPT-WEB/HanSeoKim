import { css } from "@emotion/react";
import { ThemeType } from "../../styles/theme";

export const headerStyle = (Theme: ThemeType) => css`
  color: ${Theme.color.darkGray_1};
  margin: 2rem;
`;

export const loginPageStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export const inputStyle = (Theme: ThemeType) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  gap: 0.5rem;
  & input {
    padding: 0.5rem;
    width: 20rem;
    border: 1px solid ${Theme.color.lightGray_1};
    border-radius: 5px;
  }
  & input::placeholder {
    color: ${Theme.color.lightGray_3};
  }
`;

export const pStyle = (Theme: ThemeType) => css`
  font-size: ${Theme.text.small.fontSize};
  color: ${Theme.color.lightGray_3};
  text-decoration-color: ${Theme.color.lightGray_3};
  margin: 0.3rem;
`;
