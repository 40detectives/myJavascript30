
window.addEventListener("keydown", function (e) {
    const keyboard = navigator.keyboard;
    const audio = this.document.querySelector(`audio[data-key="${e.key}"]`);
    // console.log(e.key);
    if (!audio) return;
    audio.currentTime = 0; // rewind to start so can be played over and over again
    audio.play();
});