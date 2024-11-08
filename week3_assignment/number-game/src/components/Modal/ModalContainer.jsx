import { createPortal } from "react-dom";

import { backdropStyle } from "./ModalContent.style";

const ModalContainer = ({ children }) => {
  return createPortal(<div css={backdropStyle}>{children}</div>, document.body);
};

export default ModalContainer;
