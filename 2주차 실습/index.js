const todoList = document.querySelector(".todoList");
const submitBtn = document.querySelector(".submit_btn");
const deleteBtn = document.querySelector(".deleteBtn");

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  todoList.appendChild(li);
};

submitBtn.addEventListener("click", () => {
  const newTodo = document.querySelector("#todoInput").value;
  paintTodo(newTodo);
});
