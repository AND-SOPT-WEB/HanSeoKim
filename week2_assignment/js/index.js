import { members } from "./constants.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const membersData = JSON.parse(localStorage.getItem("membersData"));

const addTableRow = (item) => {
  return `
    <tr>
        <td><input type="checkbox" /></td>
        <td>${item.name}</td>
        <td>${item.englishName}</td>
        <td>${item.github}</td>
        <td>${item.gender}</td>
        <td>${item.role}</td>
        <td>${item.firstWeekGroup}</td>
        <td>${item.secondWeekGroup}</td>
    </tr>
    `;
};

const displayTableList = (items) => {
  const TableRow = document.querySelector(".results_items");
  TableRow.innerHTML = items.map((item) => addTableRow(item)).join("");
};

//최초 렌더링
document.addEventListener("DOMContentLoaded", () => {
  displayTableList(membersData);
});
