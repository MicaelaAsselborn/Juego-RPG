function musicPlay() {
    // Plays the audio file.
    document.getElementById('audio').play();

    // Removes the event listner after the audio has been started. This is to prevent the audio from playing multiple times.
    document.removeEventListener('click', musicPlay);
}

// Adds an event listner to the document that plays the audio when the user clicks anywhere on the page.
document.addEventListener('click', musicPlay);
