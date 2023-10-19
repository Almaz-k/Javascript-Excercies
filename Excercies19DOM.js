//what to do? to do list adding and removing itesm
//how to do? using Javascript to manipulate the html elements
const ul = document.getElementById('todoList');
const inputFiled= document.getElementById('newTask');
const button = document.getElementById('addTask');
button.addEventListener('click', ()=>{
    const newList= document.createElement('li');
    newList.className='taskList';
    newList.testContent ='${inputField.value}';
    ul.appendChild(newList);
})

