const goalInput = document.getElementById("goalInput");

const addGoal = document.getElementById("addGoal");

const goalList = document.getElementById("goalList");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

displayGoals();

addGoal.addEventListener("click",()=>{


    let text =
    goalInput.value.trim();



    if(text==="") return;



    goals.push({

        name:text,

        progress:0

    });



    saveGoals();


    goalInput.value="";


});

function displayGoals(){


    goalList.innerHTML="";



    goals.forEach((goal,index)=>{


        let div =
        document.createElement("div");



        div.className="goal-card";



        div.innerHTML=`


        <div class="goal-header">


            <h3>
            ${goal.name}
            </h3>


            <span>
            ${goal.progress}%
            </span>


        </div>




        <div class="goal-progress">


            <div 
            class="goal-progress-bar"
            style="width:${goal.progress}%">

            </div>


        </div>





        <div class="goal-buttons">


            <button 
            class="increase"
            onclick="increaseGoal(${index})">

            +10%

            </button>




            <button 
            class="delete-goal"
            onclick="deleteGoal(${index})">

            Delete

            </button>



        </div>


        `;



        goalList.appendChild(div);


    });



}

function increaseGoal(index){


    if(goals[index].progress < 100){


        goals[index].progress += 10;


    }



    saveGoals();


}

function deleteGoal(index){


    goals.splice(index,1);


    saveGoals();


}

function saveGoals(){


    localStorage.setItem(

        "goals",

        JSON.stringify(goals)

    );



    displayGoals();


}