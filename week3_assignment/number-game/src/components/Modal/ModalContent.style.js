import { css } from "@emotion/react";

export const modalStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  background-color: white;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 12px;
  position: absolute;
  width: 25rem;
  top: 10rem;
  left: calc(50% - 12rem);
  bottom: 20rem;

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const buttonStyle = css`
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  border: 2px solid;
  border-radius: 7px;
  font-family: "GalmuriMono7";
  cursor: pointer;
  background-color: white;
  color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const backdropStyle = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
