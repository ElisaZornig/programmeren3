const addBtn = document.querySelector("#btn-character")


addBtn.addEventListener("click", buttonWasClicked)
cards.addEventListener("click", containerWasClicked)
function buttonWasClicked(){
    let number = Math.floor(Math.random() * 4);
    addCard(characters[number])
}
function containerWasClicked(event){
    console.log(event.target)
    if (event.target.nodeName === "DIV"){
        event.target.remove();
    }
}

function addCard(text){
    const cards =  document.querySelector("#cards")
    const div = document.createElement('div')
    div.innerText = text
    div.classList.add("card")
    cards.append(div)
}

const characters = [
    "finn",
    "jake",
    "Marceline",
    "Pr Bubbelgum"
]

// for (let character of characters){
//     addCard(character)
// }