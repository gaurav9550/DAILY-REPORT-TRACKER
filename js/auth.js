
const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function(e){

    e.preventDefault();


    // Get login values

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;



    // Get registered user from Local Storage

    let user = JSON.parse(localStorage.getItem("user"));



    // Check user exists

    if(user == null){

        alert("No account found. Please register first.");

        return;

    }



    // Match email and password

    if(email === user.email && password === user.password){


        alert("Congrats Login Successful 🎉");


        // Save login status

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        // Redirect to dashboard

        window.location.href = "dashboard.html";


    }

    else{


        alert("Invalid Email or Password ❌");


    }



});