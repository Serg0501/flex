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
    //li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo');
    newTodo.innerText = taskTodo.value;
    listTodo.append(newTodo);
    //очистка поля ввода
    taskTodo.value = "";   
    //Check
    const checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fas fa-check"></i>`;
    checkButton.classList.add('checkBtn');
    listTodo.append(checkButton);
    //Del
    const delButton = document.createElement('button');
    delButton.innerHTML = `<i class="fas fa-trash"></i>`;
    delButton.classList.add('delBtn');
    listTodo.append(delButton);
    //Important
    const impButton = document.createElement('button');
    impButton.innerHTML = `<i class="fa-solid fa-star"></i>`;
    impButton.classList.add('impBtn');
    listTodo.append(impButton);
};

function delTask(e){
    const item = e.target;

    if (item.classList[0] === 'delBtn'){
    const todo = item.parentElement;
    todo.remove();   
    };

if (item.classList[0] === 'checkBtn') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    };

if (item.classList[0] === 'impBtn') {
    const todo = item.parentElement;
    todo.classList.toggle("marked");
    };

};








