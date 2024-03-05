window.addEventListener('load', init);
setBackground()
let boeken;
let buttons;
let close;
let detailsVenster
function init() {
    boeken = document.getElementById('kinderboeken')
    buttons = document.getElementsByTagName('button');
    boeken.addEventListener('click', detailsButtonHandler);
    close = document.getElementById('close')
    close.addEventListener('click', closeDetails)

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
        let div = clickedButton.parentElement.id;
        console.log(div);
        localStorage.setItem(div, div);
        setBackground()
    }
 console.log(localStorage)
}

function closeDetails(){
    detailsVenster.style.display = 'none';
}
function setBackground(){
    for(let i = 0; i < localStorage.length; i++){
        let allBooks = document.querySelectorAll(".boek")
        for (let j = 0; j < allBooks.length; j++){
            if(localStorage[i] === allBooks[j].id){
                allBooks[j].classList.add("favorite")
            }
        }
    }
}
