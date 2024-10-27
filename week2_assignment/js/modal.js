const showModalBtn = document.querySelector(".show_modal");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close_modal");

showModalBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  const target = event.target;
  const rect = target.getBoundingClientRect();
  if (
    rect.left > event.clientX ||
    rect.right < event.clientX ||
    rect.top > event.clientY ||
    rect.bottom < event.clientY
  ) {
    modal.close();
  }
});
