window.addEventListener('load', init);
// localStorage.clear()
let boeken;
let buttons;
let close;
let detailsVenster
let items = [];
let url = 'bookDetails.php'; // Pas dit aan op basis van de locatie van je actions.php-bestand
let urlDetails

function init() {
    checkStorage()
    getBookData()
    boeken = document.getElementById('kinderboeken')

    buttons = document.getElementsByTagName('button');
    boeken.addEventListener('click', detailsButtonHandler);
    close = document.getElementById('close')
    close.addEventListener('click', closeDetails)

}
function detailsButtonHandler(e) {
    e.preventDefault(); //Leave this one out to see te result
    let clickedButton = e.target;
    if(e.target.className === "details") {
        let boek = clickedButton.parentElement;
        let boekId = boek.id;
        let text = boek.getElementsByTagName("h2")[0].innerHTML
        detailsVenster = document.getElementById('detailsVenster')


        detailsVenster.style.display = 'flex';
        let title = document.querySelector('#detailsVenster h2')
        title.innerHTML = text;
        urlDetails = 'bookDetails.php?id=' + boekId
        window.scrollTo(0, 0);
        getBookDetails()
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
function getBookData() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Er is een fout opgetreden bij het ophalen van de boekgegevens");
            }
            return response.json();
        })
        .then(data => {
            console.log("Titels van de boeken:");
            boeken = document.getElementById('kinderboeken');
            data.forEach(book => {
                console.log(book.title);
                createBook(book);
            });
        })
        .catch(errorHandler)
}
// Functie om boekdetails op te halen en in console.log te plaatsen
function getBookDetails() {
    console.log(urlDetails)
    fetch(urlDetails)
        .then(response => {
            if (!response.ok) {
                throw new Error("Er is een fout opgetreden bij het ophalen van de boekdetails");
            }
            return response.json();
        })
        .then(data => {
            fillDetailsVenster(data);
        })
        .catch(errorHandler)
}

// Functie om detailsVenster met samenvatting en tags te vullen
function fillDetailsVenster(data) {
    detailsVenster = document.getElementById('detailsVenster');
    let summary = detailsVenster.getElementsByTagName('p')[0]
    summary.innerText = data.summary
    let tag = detailsVenster.getElementsByTagName('p')[1]
    tag.innerText = data.tags.join(', ')
    // tags.textContent = `Tags: ${data.tags}`;
}

function errorHandler(error){
    console.log(error.message)
}
function createBook(book){
    // Het creëren van het div-element
    const divElement = document.createElement("div");
    divElement.classList.add("boek");
    divElement.id = book.id;

    // Het creëren van de h2-element
    const h2Element = document.createElement("h2");
    h2Element.textContent = book.title;

    // Het creëren van het img-element
    const imgElement = document.createElement("img");
    imgElement.src = `./img/${book.image}`;

    // Het creëren van de button-elementen
    const addButton = document.createElement("button");
    addButton.classList.add("add");
    addButton.textContent = "Voeg toe aan favorieten";

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent = "Verwijder uit favorieten";

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("details");
    detailsButton.textContent = "Details";


    // Elementen toevoegen aan de div
    divElement.append(h2Element);
    divElement.append(imgElement);
    divElement.append(addButton);
    divElement.append(removeButton);
    divElement.append(detailsButton);

    // Het toevoegen van het div-element aan de container
    boeken.append(divElement);
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


function closeDetails(){
    detailsVenster.style.display = 'none';
}
function removeBackground(item){
    let bookItem = document.getElementById(item)
    bookItem.classList.remove("favorite")
}






