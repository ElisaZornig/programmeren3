let album = {
    artist: 'Harry Styles',
    album: 'Harrys House',
    specialEdition: false,
    songs: ['Harry1', 'Harry2', 'Harry3', 'Harry4', 'Harry5'],
    duration: 30
}





console.log(artist);
console.log(album);
console.log(specialEdition);
console.log(songs);
console.log(duration);
if(specialEdition){
    console.log("Dit album is heel speciaal")
}

if(duration <= 30){
    console.log("Zeer kort album")
}else if (duration <= 60 ){
    console.log("Gemiddeld album")
}else if (duration <= 90){
    console.log("Waar voor je geld")
}else{
    console.log ("HMMM, dat is best extreem")
}

songs.push('Harry6');
for(let i = 0; i < songs.length; i++){
    console.log(songs[i])
}

function addSong(title){
    songs.push(title)
}
addSong('Harry7');
addSong('Harry8')
for(let i = 0; i < songs.length; i++) {
    console.log(songs[i])
}

function daysUntilMyBirthday(date){
    const currentDate = new Date();
    let daysDifferentInTime = new Date(date) - currentDate ;
    let differentInDays = Math.round(daysDifferentInTime/(3600 * 24 * 1000));
    console.log(`Het is nog ${differentInDays} dagen tot je verjaardag`)
}
daysUntilMyBirthday("7 feb 2025");