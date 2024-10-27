import { members } from "./constants.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

let membersData = JSON.parse(localStorage.getItem("membersData"));

const addTableRow = (item) => {
  return `
    <tr id = ${item.name} class="members_tr">
        <td><input type="checkbox" /></td>
        <td>${item.name}</td>
        <td>${item.englishName}</td>
        <td><a href="https://github.com/${item.github}">${item.github}</a></td>
        <td>${item.gender}</td>
        <td>${item.role}</td>
        <td>${item.firstWeekGroup}</td>
        <td>${item.secondWeekGroup}</td>
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
      return filters[key]
        ? member[key].toString().includes(filters[key].toString())
        : true;
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

  let allChecked = true;
  checkBoxes.forEach((checkBox) => {
    if (checkBox !== selectAll && !checkBox.checked) {
      allChecked = false;
    }
  });

  selectAll.checked = allChecked;
};

// 삭제 함수
const deleteMember = (event) => {
  const checkedMembers = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const checkedIds = [];
  checkedMembers.forEach((checked) => {
    const tableRow = checked.closest(".members_tr");
    if (tableRow) {
      checkedIds.push(tableRow.id);
    }
  });

  // 전체 삭제시 로컬스토리지 키 삭제
  if (checkedIds.length === membersData.length) {
    localStorage.removeItem("membersData");
    membersData = [];
    displayTableList(membersData);
    return;
  }

  const filter = membersData.filter(
    (member) => !checkedIds.includes(member.name)
  );
  localStorage.setItem("membersData", JSON.stringify(filter));

  membersData = JSON.parse(localStorage.getItem("membersData"));
  displayTableList(membersData);
};

const deleteBtn = document.querySelector(".delete_btn");
deleteBtn.addEventListener("click", deleteMember);

//필드값 초기화
const resetBtn = document.querySelector(".reset_btn");
export const reset = () => {
  const inputs = document.querySelectorAll('input[type="text');
  const selects = document.querySelectorAll("select");
  inputs.forEach((input) => (input.value = ""));
  selects.forEach((select) => (select.value = ""));
};

resetBtn.addEventListener("click", () => {
  reset();
  displayTableList(JSON.parse(localStorage.getItem("membersData")));
});
