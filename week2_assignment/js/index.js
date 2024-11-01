import { members } from "./constants.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

let membersData = JSON.parse(localStorage.getItem("membersData"));

const addTableRow = (member) => {
  return `
    <tr id = ${member.id} class="members_tr">
        <td><input type="checkbox" /></td>
        <td>${member.name}</td>
        <td>${member.englishName}</td>
        <td><a href="https://github.com/${member.github}">${member.github}</a></td>
        <td>${member.gender}</td>
        <td>${member.role}</td>
        <td>${member.firstWeekGroup}</td>
        <td>${member.secondWeekGroup}</td>
    </tr>
    `;
};

export const displayTableList = (items) => {
  const TableRowWrapper = document.querySelector(".results_items");
  TableRowWrapper.innerHTML = items.map((item) => addTableRow(item)).join("");

  //체크 상태 연결
  const selectAll = document.querySelector(".checkbox_all");
  selectAll.addEventListener("change", selectAllMembers);

  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", selectCheckBox);
  });
};

//최초 렌더링
document.addEventListener("DOMContentLoaded", () => {
  displayTableList(membersData);
});

//필터 함수
const filterMembers = (filters) => {
  return JSON.parse(localStorage.getItem("membersData")).filter((member) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true; // 필터 값이 없는 경우라면 먼저 true return (무조건 멤버 나와야 하니!)
      return key === "gender"
        ? member[key] === filters[key]
        : member[key].toString().includes(filters[key].toString());
    });
  });
};

let filters = {};

//검색 버튼 클릭시 필터 목록 렌더링
document.querySelector(".search_btn").addEventListener("click", () => {
  filters = {
    name: document.querySelector(".input_name").value,
    englishName: document.querySelector(".input_engName").value,
    github: document.querySelector(".input_github").value,
    gender: document.querySelector(".input_gender").value,
    role: document.querySelector(".input_role").value,
    firstWeekGroup: Number(document.querySelector(".input_week1").value),
    secondWeekGroup: Number(document.querySelector(".input_week2").value),
  };

  const filteredMembers = filterMembers(filters);

  displayTableList(filteredMembers);
});

// 전체 선택 체크박스 클릭
const selectAllMembers = (event) => {
  const selectAll = event.target;
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

  checkBoxes.forEach((checkBox) => {
    checkBox.checked = selectAll.checked;
  });
};

// 개별 체크박스 선택
const selectCheckBox = () => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  const selectAll = document.querySelector(".checkbox_all");

  selectAll.checked = [...checkBoxes].every(
    (checkBox) => checkBox === selectAll || checkBox.checked
  );
};

// 삭제 함수
const deleteMember = (event) => {
  const checkedMembers = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const checkedIds = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checked) => Number(checked.closest(".members_tr").id));

  const filter = membersData.filter(
    (member) => !checkedIds.includes(member.id)
  );

  localStorage.setItem("membersData", JSON.stringify(filter));

  membersData = JSON.parse(localStorage.getItem("membersData"));
  displayTableList(membersData);
};

const deleteBtn = document.querySelector(".delete_btn");
deleteBtn.addEventListener("click", () => {
  deleteMember();
});

//필드값 초기화
const resetBtn = document.querySelector(".reset_btn");
export const reset = () => {
  const inputs = document.querySelectorAll('input[type="text"]');
  s;
  const selects = document.querySelectorAll("select");
  inputs.forEach((input) => (input.value = ""));
  selects.forEach((select) => (select.value = ""));
};

resetBtn.addEventListener("click", () => {
  displayTableList(JSON.parse(localStorage.getItem("membersData")));

  reset();
});
