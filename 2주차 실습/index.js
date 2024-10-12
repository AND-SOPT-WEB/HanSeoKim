const todoList = document.querySelector(".todoList");
const submitBtn = document.querySelector(".submit_btn");
const deleteBtn = document.querySelector(".delete_btn");
const todos = [];

const saveTodos = () => {
  localStorage.setItem("todos", todos);
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerHTML = `${newTodo}<button class="delete_btn">삭제하기</button>`;
  todoList.appendChild(li);
};

submitBtn.addEventListener("click", () => {
  const newTodo = document.querySelector("#todoInput").value;
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
  newTodo.value = "";
});

todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete_btn")) {
    const li = event.target.closest("li");
    li.remove();
  }
});
