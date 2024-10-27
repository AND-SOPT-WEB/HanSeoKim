const showModalBtn = document.querySelector(".show_modal");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close_modal");
const addDataBtn = document.querySelector(".add_btn");

showModalBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
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
  }

  modal.close();
};

addDataBtn.addEventListener("click", addData);
