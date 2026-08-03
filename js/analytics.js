// Get Data

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


let habits = JSON.parse(localStorage.getItem("habits")) || [];


let goals = JSON.parse(localStorage.getItem("goals")) || [];


let sessions = localStorage.getItem("sessions") || 0;



// Task Data

let completedTasks =
tasks.filter(
task => task.completed
).length;


let pendingTasks = tasks.length - completedTasks;


// Task Chart

new Chart(
document.getElementById("taskChart"),
{

type:"doughnut",

data:{

labels:[
"Completed",
"Pending"
],

datasets:[{

data:[
completedTasks,
pendingTasks
]

}]

}

});


// Focus Chart


new Chart(
document.getElementById("focusChart"),
{

type:"bar",

data:{

labels:[
"Sessions"
],

datasets:[{

label:"Focus Sessions",

data:[
sessions
]

}]

}

});


// Habit Chart


let habitData =
habits.map(
habit=>habit.streak
);



new Chart(
document.getElementById("habitChart"),
{

type:"bar",

data:{

labels:
habits.map(
habit=>habit.name
),


datasets:[{

label:"Streak Days",

data:habitData

}]

}

});


// Goal Chart


new Chart(
document.getElementById("goalChart"),
{

type:"line",

data:{

labels:
goals.map(
goal=>goal.name
),


datasets:[{

label:"Progress %",

data:
goals.map(
goal=>goal.progress
)

}]

}

});