const audio = new Audio("../EgorPreviewSong.mp3");
audio.volume = 0.07;
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