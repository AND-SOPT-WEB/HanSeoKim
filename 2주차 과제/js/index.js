import { members } from "./utils/constants";

const tableRow = ({ members }) => {
  return `
    <tr>
        <td><input type="checkbox" /></td>
        <td>${members.name}</td>
        <td>${members.englishName}</td>
        <td>${members.github}</td>
        <td>${members.gender}</td>
        <td>${members.role}</td>
        <td>${members.firstWeekGroup}</td>
        <td>${members.secondWeekGroup}</td>
    </tr>
    `;
};

const displayTableList = (items) => {};
