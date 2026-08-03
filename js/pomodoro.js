let time = 50 * 60;

let timer;

let timerDisplay = document.getElementById("timer");

let sessions = document.getElementById("sessions");

let completedSessions = localStorage.getItem("sessions") || 0;

sessions.innerText = completedSessions;






document
.getElementById("startTimer")
.addEventListener("click",()=>{


    timer=setInterval(()=>{


        let minutes =
        Math.floor(time / 60);


        let seconds = time % 60;



        timerDisplay.innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        time--;



        if(time < 0){


            clearInterval(timer);



            completedSessions++;


            localStorage.setItem(

                "sessions",

                completedSessions

            );



            sessions.innerText = completedSessions;



            alert("Focus Session Completed 🎉");



            resetTimer();


        }



    },1000);



});


document
.getElementById("pauseTimer")
.addEventListener("click",()=>{


    clearInterval(timer);


});


document
.getElementById("resetTimer")
.addEventListener("click",()=>{


    resetTimer();


});

function resetTimer(){


    clearInterval(timer);



    time = 50 * 60;



    timerDisplay.innerText =
    "50:00";


};

