const editBtn = document.getElementById("editProfile");

const editForm = document.getElementById("editForm");

const saveBtn = document.getElementById("saveProfile");

const nameInput = document.getElementById("nameInput");

const roleInput = document.getElementById("roleInput");

const profileName = document.getElementById("profileName");

const profileRole = document.getElementById("profileRole");


// Load saved profile

let profile =
JSON.parse(localStorage.getItem("profile")) || {

    name:"Gaurav Kumar",

    role:"Computer Science Student"

};

profileName.innerText =
profile.name;


profileRole.innerText =
profile.role;


// Open edit form

editBtn.addEventListener("click",()=>{


    editForm.style.display="flex";


    nameInput.value =
    profile.name;


    roleInput.value =
    profile.role;


});


// Save profile

saveBtn.addEventListener("click",()=>{


    profile.name =
    nameInput.value;


    profile.role =
    roleInput.value;



    localStorage.setItem(

        "profile",

        JSON.stringify(profile)

    );



    profileName.innerText =
    profile.name;


    profileRole.innerText =
    profile.role;



    editForm.style.display="none";


});