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

// add a click event listner to the newly created list item for removal of items/ list
newList.addEventListener('click',()=>{
    ul.removeChild(newList);
});
// clearing the input field after adding the task
inputFiled.value='';
})
