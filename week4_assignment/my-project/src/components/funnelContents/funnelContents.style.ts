import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const funnelWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const funnelTitleStyle = css`
  color: ${Theme.color.lightGray_3};
  font-size: ${Theme.text.medium.fontSize};
  margin-top: 2rem;
  margin-bottom: 1rem;
  & input::placeholder {
    color: ${Theme.color.lightGray_3};
  }
`;

export const funnelInputStyle = (isError: boolean) => css`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  width: 20rem;
  border: 1px solid ${Theme.color.lightGray_1};
  border-radius: 5px;
  ::placeholder {
    color: ${Theme.color.lightGray_3};
  }
  :focus {
    outline: none;
  }

  ${isError &&
  css`
    border: 1px solid ${Theme.color.red};
  `}
`;

export const errMsgStyle = css`
  font-size: ${Theme.text.small.fontSize};
  margin-bottom: 0.5rem;
  color: ${Theme.color.red};
`;

export const funnelPstyle = css`
  text-align: center;
  font-size: ${Theme.text.small.fontSize};
  color: ${Theme.color.lightGray_3};
  text-decoration-color: ${Theme.color.lightGray_3};
  margin: 0.3rem;
`;

export const visibleBtn = css`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: ${Theme.color.lightGray_2};
`;
