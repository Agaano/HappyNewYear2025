// ССЫЛКУ НА МОЙ ТРЕК (КОТОРЫЙ ТЕБЕ ЕГОР СКИНУЛ) ВСТАВЛЯТЬ ЗДЕСЬ ЧТО БЫ ОН ИГРАЛ КОНКРЕТНО НА МОЕЙ СТРАНИЦЕ)
// ЕГО ПЕРЕД ЭТИМ НАДО СКАЧАТЬ И ЗАКИНУТЬ В ПАПОЧКУ)
const audio = new Audio("../");
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