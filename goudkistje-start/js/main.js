window.addEventListener('load', init);
//Global variables
const imageList = ['ballonnen', 'cars', 'planes', 'goudkistje'];
let playField;
let imageElement;
let form;
let answer;
let alert;
/**
 * Initialize after the DOM is ready
 */
function init() {
    playField = document.getElementById('playing-field');
    playField.style.display = 'flex';
    playField.addEventListener("click", clickImage)
    alert= document.getElementById("alert")
    form = document.querySelector("form")
    form.addEventListener("submit", formSubmitHandler)
    createPlayField();

}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField() {
    shuffleArray(imageList)
    for (let i = 0; i < imageList.length; i++) {
        let div = document.createElement("div")
        div.classList.add('playing-card')
        let H2 = document.createElement("H2")
        H2.innerHTML = i;
        div.append(H2)
        playField.append(div);
        imageElement = document.createElement("img")
        imageElement.src = "img/vraagteken-plaatjes.png";
        imageElement.dataset.name = imageList[i];
        imageElement.dataset.id = i;
        div.append(imageElement);
    }

}
function clickImage(event){
    if(event.target.nodeName === "IMG") {
        let allImages = document.getElementsByTagName('img')
        for (let j = 0; j < allImages.length; j++) {
            allImages[j].src = "img/vraagteken-plaatjes.png";
        }
        event.target.src = "img/" + event.target.dataset.name + ".png"
    }
}


/**
 * Handler for when the form is submitted
 *
 * @param event
 */
function formSubmitHandler(event) {
    event.preventDefault();
    let treasureLocation = imageList.indexOf("goudkistje")
    answer = document.getElementById("guess-number").value
    if(answer == treasureLocation){
        alert.innerHTML = "Gefeliciteerd je hebt het goed geraden!";

    }else{
        alert.innerHTML = "Fout! probeer het nog een keer!";
    }
}

/**
 * Write text for the user as feedback of their answer
 *
 * @param text
 */
function writeFeedbackMessage(text) {

}

/**
 * Randomize array using sort
 * @param array
 * @returns {*}
 */
function shuffleArray(array) {
    return array.sort(() => (Math.random() - 0.5));
}
