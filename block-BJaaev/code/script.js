let inputText = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector("ul");

let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

let activeButton = "all";
let allTodos = localStorage.getItem('allTodos')
? JSON.parse(localStorage.getItem('allTodos')) 
: [];

function handleInput(event) {
  let value = event.target.value;
  if (event.keyCode === 13 && value !== "") {
    console.log(value);
    let todo = {
      name: value,
      isDone: false,
    };
    allTodos.push(todo);
    event.target.value = "";

    createUI();
    localStorage.setItem("allTodos",JSON.stringify(allTodos));
  }
}

function handleDelete(event) {
  let id = event.target.dataset.id;
  allTodos.splice(id, 1);
  console.log(allTodos);
  createUI();
  localStorage.setItem("allTodos",JSON.stringify(allTodos));
}
function handleToggle(event) {
  let id = event.target.dataset.id;
  allTodos[id].isDone = !allTodos[id].isDone;
  createUI();
  localStorage.setItem("allTodos",JSON.stringify(allTodos));
}
/* 
    <li>
          <input type="checkbox" name="checkbox" id="0">
          <label for="checkbox">Play cricket</label>
          <span>❌</span>
        </li>
*/

function createUI(data = allTodos) {
  rootElm.innerHTML = "";
  data.forEach((todo, index) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input", handleToggle);
    input.checked = todo.isDone;
    input.setAttribute("data-id", index);
    input.id = index;
    let label = document.createElement("label");
    label.for = "checkbox";
    label.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", index);
    span.addEventListener("click", handleDelete);
    li.append(input, label, span);

    rootElm.append(li);
  });
}
createUI();

clear.addEventListener("click", () => {
  allTodos = allTodos.filter((todo) => !todo.isDone);
  createUI();
  localStorage.setItem("allTodos",JSON.stringify(allTodos));
  console.log(allTodos);
});

active.addEventListener("click", () => {
  let notCompleted = allTodos.filter((todo) => !todo.isDone);
  createUI(notCompleted);

  activeButton = "active";
  updateActiveBtn();
});

completed.addEventListener("click", () => {
    let completed = allTodos.filter((todo) => todo.isDone);
    createUI(completed);
  
    activeButton = "completed";
    updateActiveBtn();
  });


  all.addEventListener("click", () => {
    createUI();
  
    activeButton = "all";
    updateActiveBtn();
  });

function updateActiveBtn(btn = activeButton) {
  all.classList.remove("selected");
  active.classList.remove("selected");
  completed.classList.remove("selected");
  if (btn == "all") {
    all.classList.add("selected");
  }
  if (btn == "active") {
    active.classList.add("selected");
  }
  if (btn == "completed") {
    completed.classList.add("selected");
  }
}
updateActiveBtn();
inputText.addEventListener("keyup", handleInput);
