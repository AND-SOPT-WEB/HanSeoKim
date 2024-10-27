import { displayTableList, reset } from "./index.js";

const showModalBtn = document.querySelector(".show_modal");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close_modal");
const addDataBtn = document.querySelector(".add_btn");
const resetBtn = document.querySelector(".reset_btn");

showModalBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
  reset();
});

modal.addEventListener("click", (event) => {
  const rect = event.target.getBoundingClientRect();
  if (
    rect.left > event.clientX ||
    rect.right < event.clientX ||
    rect.top > event.clientY ||
    rect.bottom < event.clientY
  ) {
    modal.close();
    reset();
  }
});

// 모달 데이터 추가 함수
const addData = () => {
  const inputs = document.querySelectorAll(".modal input");
  const selects = document.querySelectorAll(".modal select");
  let isFilled = true;

  // 빈칸 있을시 alert
  inputs.forEach((input) => {
    if (!input.value) {
      isFilled = false;
    }
  });
  selects.forEach((option) => {
    if (!option.value) {
      isFilled = false;
    }
  });
  if (!isFilled) {
    alert("빈칸을 모두 채워주세요.");
    return;
  }

  let addMemberInfo = {};
  addMemberInfo = {
    name: document.querySelector(".new_name").value,
    englishName: document.querySelector(".new_engName").value,
    github: document.querySelector(".new_github").value,
    gender: document.querySelector(".new_gender").value,
    role: document.querySelector(".new_role").value,
    firstWeekGroup: Number(document.querySelector(".new_week1").value),
    secondWeekGroup: Number(document.querySelector(".new_week2").value),
  };

  let newInfo = JSON.parse(localStorage.getItem("membersData"));
  newInfo.push(addMemberInfo);
  localStorage.setItem("membersData", JSON.stringify(newInfo));
  newInfo = JSON.parse(localStorage.getItem("membersData"));

  modal.close();
  displayTableList(newInfo);
};

addDataBtn.addEventListener("click", addData);
