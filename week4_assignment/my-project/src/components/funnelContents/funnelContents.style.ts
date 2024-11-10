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

export const funnelInputStyle = css`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  width: 20rem;
  border: 1px solid ${Theme.color.lightGray_1};
  border-radius: 5px;
  ::placeholder {
    color: ${Theme.color.lightGray_3};
  }
`;

export const funnelButtonStyle = css`
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
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const funnelPstyle = css`
  text-align: center;
  font-size: ${Theme.text.small.fontSize};
  color: ${Theme.color.lightGray_3};
  text-decoration-color: ${Theme.color.lightGray_3};
  margin: 0.3rem;
`;
