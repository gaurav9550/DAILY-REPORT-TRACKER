const registerForm = document.getElementById("registerForm");


registerForm.addEventListener("submit", function(e){

    e.preventDefault();
    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let user = {
        name:name,
        email:email,
        password:password

    };



    // Store user data

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );



    alert("Account Created Successfully 🎉");

    window.location.href="../html/index.html";


});