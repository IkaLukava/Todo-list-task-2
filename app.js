
 
const todoForm = document.getElementsByClassName('inputVal')[0];
const addTaskBtn = document.getElementsByClassName('btn')[0];

addTaskBtn.addEventListener('click',()=>{

    let some = JSON.parse(localStorage.getItem('some'))
    if(some === null){
        taskList = []
    }else{
        taskList=some;
    }
    taskList.push(todoForm.value)
    localStorage.setItem('some', JSON.stringify(taskList))
    showlist()
})


function showlist(){
    let outPut = '';
    let taskListShow = document.querySelector('.todoLists')
   


    let some = JSON.parse(localStorage.getItem('some'))
    if(some === null){
        taskList = [];
    }else{
        taskList=some;
    }
    taskList.forEach((data, index)=>{
        outPut += ` <div class="todoList">
        <p class="pText">${data}</p>
        <button class="deleteTask" onClick="deleteItem(${index})">x</button>
        </div> `
    });
    taskListShow.innerHTML = outPut;
}

showlist();
function deleteItem(index){
    let some = JSON.parse(localStorage.getItem('some'))
    taskList.splice(index,1)
    localStorage.setItem('some', JSON.stringify(taskList))
    showlist()
}

function clearTask(){
    localStorage.clear()
    showlist()
}















