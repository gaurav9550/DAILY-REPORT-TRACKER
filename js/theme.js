const themeButton = document.getElementById("themeToggle");

let darkMode = localStorage.getItem("darkMode");

if(darkMode==="true"){

    document.body.classList.add("dark");

}

themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    let enabled = document.body.classList.contains("dark");



    localStorage.setItem(
        "darkMode",
        enabled
    );


});