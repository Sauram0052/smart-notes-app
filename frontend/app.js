// app.js

let noteInput = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let noteList = document.getElementById("noteList");

let notes = [];

addBtn.addEventListener("click", function(){

    let noteText = noteInput.value;

    // Edge case
    if(noteText.trim() === ""){
        alert("Please enter a note");
        return;
    }

    notes.push(noteText);

    noteInput.value = "";

    showNotes();
});

function showNotes(){

    noteList.innerHTML = "";

    notes.forEach(function(note, index){

        let li = document.createElement("li");

        li.innerText = note;

        let deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Delete";

        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function(){

            notes.splice(index, 1);

            showNotes();
        });

        li.appendChild(deleteBtn);

        noteList.appendChild(li);

    });

}