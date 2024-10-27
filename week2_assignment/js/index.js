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
  const TableRowWrapper = document.querySelector(".results_items");
  TableRowWrapper.innerHTML = items.map((item) => addTableRow(item)).join("");
};

//최초 렌더링
document.addEventListener("DOMContentLoaded", () => {
  displayTableList(membersData);
});

//필터 함수
const filterMembers = (filters) => {
  return membersData.filter((member) => {
    return Object.keys(filters).every((key) => {
      return filters[key] ? filters[key] === member[key] : true;
    });
  });
};

let filters = {};

document.querySelector(".input_gender").addEventListener("change", (event) => {
  filters.gender = event.target.value;
});

document.querySelector(".input_role").addEventListener("change", (event) => {
  filters.role = event.target.value;
});

//검색 버튼 클릭시 필터 목록 렌더링
document.querySelector(".search_btn").addEventListener("click", (event) => {
  filters = {
    name: document.querySelector(".input_name").value,
    englishName: document.querySelector(".input_engName").value,
    github: document.querySelector(".input_github").value,
    gender: document.querySelector(".input_gender").value,
    role: document.querySelector(".input_role").value,
    firstWeekGroup: document.querySelector(".input_week1").value,
    secondWeekGroup: document.querySelector(".input_week2").value,
  };

  const filteredMembers = filterMembers(filters);

  displayTableList(filteredMembers);
});
