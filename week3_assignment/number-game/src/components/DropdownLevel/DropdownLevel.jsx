/** @jsxImportSource @emotion/react */
import { DropdownStyle } from "./DropdownLevel.style";

const DropdownLevel = ({ handleLevel }) => {
  return (
    <select
      name=""
      id=""
      css={DropdownStyle}
      onChange={(e) => handleLevel(e.target.value)}
    >
      <option value="1">Level 1</option>
      <option value="2">Level 2</option>
      <option value="3">Level 3</option>
    </select>
  );
};

export default DropdownLevel;
