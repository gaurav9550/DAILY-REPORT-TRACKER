const taskInput = document.getElementById("taskInput");

const addTask = document.getElementById("addTask");

const taskList = document.getElementById("taskList");



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



displayTasks();



addTask.addEventListener("click",()=>{


    let text = taskInput.value.trim();



    if(text===""){

        return;

    }



    tasks.push({

        name:text,

        completed:false

    });



    saveTasks();


    taskInput.value="";


});






function displayTasks(){


    taskList.innerHTML="";



    tasks.forEach((task,index)=>{



        let div=document.createElement("div");


        div.className="task-item";



        if(task.completed){

            div.classList.add("completed");

        }



        div.innerHTML=`


        <span>

        ${task.name}

        </span>



        <div>


        <button onclick="completeTask(${index})">

        ✔

        </button>



        <button 
        class="delete-btn"
        onclick="deleteTask(${index})">

        🗑

        </button>


        </div>


        `;



        taskList.appendChild(div);



    });


}






function completeTask(index){


    tasks[index].completed =
    !tasks[index].completed;



    saveTasks();


}







function deleteTask(index){


    tasks.splice(index,1);


    saveTasks();


}







function saveTasks(){


    localStorage.setItem(

        "tasks",

        JSON.stringify(tasks)

    );


    displayTasks();


}