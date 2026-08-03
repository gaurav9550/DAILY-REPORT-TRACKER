const noteTitle =
document.getElementById("noteTitle");


const noteText =
document.getElementById("noteText");


const addNote =
document.getElementById("addNote");


const notesList =
document.getElementById("notesList");



let notes =
JSON.parse(localStorage.getItem("notes")) || [];



displayNotes();





addNote.addEventListener("click",()=>{


    let title =
    noteTitle.value.trim();


    let text =
    noteText.value.trim();



    if(title==="" || text===""){

        alert("Please write note");

        return;

    }





    let note = {

        title:title,

        text:text,

        date:new Date().toLocaleDateString()

    };



    notes.push(note);



    saveNotes();



    noteTitle.value="";

    noteText.value="";



});








function displayNotes(){


    notesList.innerHTML="";



    notes.forEach((note,index)=>{


        let div =
        document.createElement("div");



        div.className="note-card";



        div.innerHTML=`


        <button 
        class="delete-note"
        onclick="deleteNote(${index})">

        🗑

        </button>


        <h3>
        ${note.title}
        </h3>


        <p>
        ${note.text}
        </p>


        <small>
        ${note.date}
        </small>


        `;



        notesList.appendChild(div);



    });


}







function deleteNote(index){


    notes.splice(index,1);


    saveNotes();


}







function saveNotes(){


    localStorage.setItem(

        "notes",

        JSON.stringify(notes)

    );


    displayNotes();


}