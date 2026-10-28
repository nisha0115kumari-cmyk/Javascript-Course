const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name :'do maths',
  dueDate : '29-06-2026'
  },
  {
  name : 'have dinner',
  dueDate : '30-06-2026'
  }
];

renderTodoList();

function renderTodoList(){
let todoListHTML = '';

todoList.forEach(function(todoObject,index){
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
  const {name,dueDate} = todoObject; //destructuring
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
    todoList.splice(${index},1);
    renderTodoList();
    saveToStorage();
  " class="delete-todo-button">Delete</button>
  `;
  todoListHTML += html;
});

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;



   todoList.push({
    //name : name,
    //dueDate : dueDate
    name,dueDate
   });
   inputElement.value = '';
   renderTodoList();
   saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}