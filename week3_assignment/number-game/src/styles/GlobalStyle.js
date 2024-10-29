import { css } from "@emotion/react";
import { fontStyle } from "./fonts";

export const GlobalStyle = css`
  ${fontStyle}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }
`;
