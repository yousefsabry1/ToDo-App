var newTask = document.getElementById("addTask");
var addBtn = document.getElementById("addBtn");
var data = document.getElementById("data");

addBtn.addEventListener('click',addTask);

var taskContainer;

if(localStorage.getItem("tasks")==null)
{
    taskContainer = [];
}
else
{
    taskContainer = JSON.parse(localStorage.getItem("tasks"));
    displayTask(taskContainer);
}

function addTask()
{
    var task = {
        task : newTask.value , 
        done : false
    };

    taskContainer.push(task);
    localStorage.setItem("tasks",JSON.stringify(taskContainer));
    displayTask(taskContainer);
    clearTasks();
}

function displayTask(arr)
{
    var taskat = '';

    if(arr.length>0)
    {
        for(var i = 0 ; i < arr.length ; i++ )
            {
                taskat += `
                    <tr>
                    <td><h3>${i+1} .</h3></td>
                    <td><h3>${arr[i].task}</h3></td>
                    <td><button onclick="deleteTask(${i})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
                    <td><button onclick="doneTask(${i})" class="btn btn-light"><i class="fa-regular fa-square-check"></i></button></td>
                    </tr>
            `
            }
    }
    else
    {
        taskat = `
        <span>Meeeeeen hy3ml task gdeeed naaaw ?? </span>
        <br>
        <span>anaaaaaaaaaaaaa</span>
        <br>
        <span><3</span>
        `
    }
    data.innerHTML = taskat;
}

function clearTasks()
{
    newTask.value = null;
}

function deleteTask(index)
{
    taskContainer.splice(index,1);
    displayTask(taskContainer);
    localStorage.setItem("tasks",JSON.stringify(taskContainer));
}


function doneTask(index)
{
    taskContainer[index].done = true;
    var doneTask = taskContainer.splice(index, 1)[0];
    taskContainer.push(doneTask);
    localStorage.setItem("tasks", JSON.stringify(taskContainer));
    displayTask(taskContainer);
}