/*
Todo
Доделать todo задачник. Реализовать добавление, удаление, обновление задач. 
Задача - текст, время выполнение, можно deadline.
*/

const taskTodo = document.getElementById('taskTodo');//input
const buttonAdd = document.getElementById('buttonAdd');
const listTodo = document.getElementById('listTodo');//ul

buttonAdd.addEventListener('click', addNewTask);
listTodo.addEventListener('click', delTask);

function addNewTask(e){
    //div
    const divTodo = document.createElement('div');
    divTodo.classList.add('todo');
    //li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todoItem');
    newTodo.innerText = taskTodo.value;
    divTodo.appendChild(newTodo);
    //очистка поля ввода
    taskTodo.value = "";   
    //Check
    const checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fas fa-check"></i>`;
    checkButton.classList.add('checkBtn');
    divTodo.appendChild(checkButton);
    //Del
    const delButton = document.createElement('button');
    delButton.innerHTML = `<i class="fas fa-trash"></i>`;
    delButton.classList.add('delBtn');
    divTodo.appendChild(delButton);
    //Important
    const impButton = document.createElement('button');
    impButton.innerHTML = `<i class="fa-solid fa-star"></i>`;
    impButton.classList.add('impBtn');
    divTodo.appendChild(impButton);

    listTodo.appendChild(divTodo);
};

function delTask(e){
    const item = e.target;

    if (item.classList[0] === 'delBtn'){
    const todo = item.parentElement;
    todo.remove();   
    };

if (item.classList[0] === 'checkBtn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    };

if (item.classList[0] === 'impBtn') {
    const todo = item.parentElement;
    todo.classList.toggle('marked');
    };

};











