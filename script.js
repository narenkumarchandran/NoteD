var popoverlay=document.querySelector(".pop-overlay")
var popupbox=document.querySelector(".popup-box")
var popbutton=document.getElementById("add-pop-up-button") 

popbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"

})


var container=document.querySelector(".container")
var notetitle=document.getElementById("Note-tilte-input")
var noteauthor=document.getElementById("note-author-input")
var description=document.getElementById("Description-input")
var addbutton=document.getElementById("addnote")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${notetitle.value}</h2>
    <h5>${noteauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletenote(event) ">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
})


function deletenote(event){
    event.target.parentElement.remove()

}