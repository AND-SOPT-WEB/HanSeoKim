import { css } from "@emotion/react";
import { ThemeType } from "../../styles/theme";

export const signupStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const headerStyle = (Theme: ThemeType) => css`
  color: ${Theme.color.darkGray_1};
  margin: 2rem;
`;
