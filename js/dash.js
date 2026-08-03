// Get logged in user

let user = JSON.parse(
    localStorage.getItem("user")
);


// Check login status

let isLoggedIn = localStorage.getItem("isLoggedIn");


// If user is not logged in

if(isLoggedIn !== "true"){

    window.location.href = "index.html";

}



// Show username

if(user){

    document.querySelector(".user span").innerText = user.name;


    document.querySelector(".welcome h2").innerText =
    `Good Morning, ${user.name} 👋`;

}

// LOgout Function
const logout = document.getElementById("logout");


logout.addEventListener("click",()=>{


    localStorage.removeItem("isLoggedIn");


    window.location.href="index.html";


});