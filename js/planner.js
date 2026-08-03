const dateInput =
document.getElementById("plannerDate");


const dateDisplay =
document.getElementById("dateDisplay");


const planInput =
document.getElementById("planInput");


const addPlan =
document.getElementById("addPlan");


const planList =
document.getElementById("planList");



let plans =
JSON.parse(localStorage.getItem("plans")) || {};



let selectedDate = "";





dateInput.addEventListener("change",()=>{


    selectedDate = dateInput.value;


    dateDisplay.innerText =
    selectedDate;


    displayPlans();


});







addPlan.addEventListener("click",()=>{


    let text =
    planInput.value.trim();



    if(text==="" || selectedDate===""){

        alert("Select date and add plan");

        return;

    }





    if(!plans[selectedDate]){


        plans[selectedDate]=[];

    }




    plans[selectedDate].push(text);



    savePlans();


    planInput.value="";


});







function displayPlans(){


    planList.innerHTML="";



    if(!plans[selectedDate]){

        return;

    }




    plans[selectedDate].forEach((plan,index)=>{


        let div =
        document.createElement("div");



        div.className="plan-item";



        div.innerHTML=`

        <span>
        ${plan}
        </span>


        <button 
        class="delete-plan"
        onclick="deletePlan(${index})">

        🗑

        </button>


        `;



        planList.appendChild(div);


    });


}








function deletePlan(index){


    plans[selectedDate].splice(index,1);


    savePlans();


}







function savePlans(){


    localStorage.setItem(

        "plans",

        JSON.stringify(plans)

    );



    displayPlans();

}