window.addEventListener('load', init);
let form;
let input;
let output;
let list
/**
 * Initialize the application
 */
function init()
{
    form = document.querySelector("form")
    list = document.querySelector("#list")
    input = document.querySelector("#todo-field")
    form.addEventListener("submit", addToDo)
    list.addEventListener("click", containerWasClicked);
}

function addToDo (e){
    e.preventDefault();
    output = document.createElement("li")
    output.innerText = input.value;
    list.append(output);
    input.value = "";
}
function containerWasClicked(event){
    console.log(event.target)
    if (event.target.nodeName === "LI"){
        event.target.remove();
    }
}