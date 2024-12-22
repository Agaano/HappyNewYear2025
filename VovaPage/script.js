const audio = new Audio("../VovaPreviewSong.mp3");
audio.volume = 0.05;
console.log(getCookie("timing"))
audio.currentTime = getCookie("timing")
audio.play();
document.addEventListener("DOMContentLoaded", async (e) => {
    await Sleep(500);
    console.log();
    document.body.style = `
                            transition-duration: 1s;
                            filter: opacity(1);
                            `
})