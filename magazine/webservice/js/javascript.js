window.addEventListener('load', init);
// localStorage.clear()
let boeken;
let buttons;
let close;
let detailsVenster
let items = [];

function init() {
    checkStorage()
    boeken = document.getElementById('kinderboeken')
    buttons = document.getElementsByTagName('button');
    boeken.addEventListener('click', detailsButtonHandler);
    close = document.getElementById('close')
    close.addEventListener('click', closeDetails)

}

function checkStorage(){
    let stored = localStorage.getItem("all-favorites")
    if(stored){
        items = JSON.parse(stored)
    }
    for(let item of items){
        changeBackground(item)
    }
}
function changeBackground(item) {
    let allBooks = document.querySelectorAll(".boek")
    for (let j = 0; j < allBooks.length; j++){
        if(item === allBooks[j].id){
            allBooks[j].classList.add("favorite")
        }
    }
}


/**
 * Handler for the form submit event
 *
 * @param e
 */
function detailsButtonHandler(e) {
    e.preventDefault(); //Leave this one out to see te result
    let clickedButton = e.target;
    if(e.target.className === "details") {
        let boek = clickedButton.parentElement;
        let text = boek.getElementsByTagName("h2")[0].innerHTML
        detailsVenster = document.getElementById('detailsVenster')


        detailsVenster.style.display = 'flex';
        let title = document.querySelector('#detailsVenster h2')
        title.innerHTML = text;
    }
    if(e.target.className === "add"){

        let book = e.target.parentNode
        let bookId = book.id
        console.log(bookId)
        items.push(bookId);
        localStorage.setItem("all-favorites", JSON.stringify(items))
        changeBackground(bookId)
    }
    if(e.target.className === "remove"){

        let book = e.target.parentNode
        let bookId = book.id
        items = JSON.parse(localStorage.getItem("all-favorites"));
        let index  = items.indexOf(bookId);
        items.splice(index, 1);
        localStorage.setItem("all-favorites", JSON.stringify(items))
        removeBackground(bookId)
    }
}

function closeDetails(){
    detailsVenster.style.display = 'none';
}
function removeBackground(item){
    let bookItem = document.getElementById(item)
    bookItem.classList.remove("favorite")
}





