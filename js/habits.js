const habitInput = document.getElementById("habitInput");

const addHabit = document.getElementById("addHabit");

const habitList = document.getElementById("habitList");

let habits = JSON.parse(localStorage.getItem("habits")) || [];

displayHabits();

addHabit.addEventListener("click",()=>{


    let name = habitInput.value.trim();



    if(name==="") return;



    habits.push({

        name:name,

        streak:0,

        completed:false

    });



    saveHabits();


    habitInput.value="";


});

function displayHabits(){


    habitList.innerHTML="";



    habits.forEach((habit,index)=>{


        let div =
        document.createElement("div");



        div.className="habit-item";



        div.innerHTML=`


        <div class="habit-info">

            <h3>
            ${habit.name}
            </h3>

            <p class="streak">

            🔥 ${habit.streak} Days

            </p>

        </div>




        <div class="habit-actions">


            <button 
            class="complete-habit"
            onclick="completeHabit(${index})">

            ✔

            </button>



            <button 
            class="delete-habit"
            onclick="deleteHabit(${index})">

            🗑

            </button>


        </div>



        `;



        habitList.appendChild(div);



    });


}

function completeHabit(index){


    habits[index].streak++;


    saveHabits();


}


function deleteHabit(index){


    habits.splice(index,1);


    saveHabits();


}


function saveHabits(){


    localStorage.setItem(

        "habits",

        JSON.stringify(habits)

    );


    displayHabits();


}