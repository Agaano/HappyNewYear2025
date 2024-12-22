//audioTiming - СЕКУНДА С КОТОРОЙ НАЧИНАЕТСЯ ТРЕК КОГДА НАВОДИШЬСЯ НА ПРЕВЬЮШКУ)

const previewsWrapper = document.getElementsByClassName("characters-wrapper")[0];

const previews = {
    Egor: {
        node: document.getElementsByClassName("egor-preview")[0],
        audio: new Audio("EgorPreviewSong.mp3"), 
        audioTiming: 63.5,
        audioVolume: 0.15
    },
    Volodya: {
        node: document.getElementsByClassName("volodya-preview")[0],
        audio: new Audio("VolodyaPreviewSong.mp3"),
        audioTiming: 16,
        audioVolume: 0.1 
    },
    //ЧТО БЫ ТРЕК ИГРАЛ ПРИ НАВЕДЕНИИ НА МОЮ ПРЕВЬЮШКУ ВСТАВЬ ССЫЛКУ НА НЕГО ЗДЕСЬ В ОБЪЕКТЕ AUDIO. ТАМ ГДЕ audioTiming ВСТАВЬ С КАКОЙ СЕКУНДЫ БУДЕТ НАЧИНАТЬСЯ ПЕСНЯ)
    Nikita: {
        node: document.getElementsByClassName("nikita-preview")[0],
        audio: new Audio(""),
        audioTiming: 0,
        audioVolume: 0.05,
    },
    Kirya: {
        node: document.getElementsByClassName("kirya-preview")[0],
        audio: new Audio(""),
        audioTiming: 0,
        audioVolume: 0.05,
    },
    Vova: {
        node: document.getElementsByClassName("vova-preview")[0],
        audio: new Audio("VovaPreviewSong.mp3"),
        audioTiming: 16,
        audioVolume: 0.3,
    },
    Keks: {
        node: document.getElementsByClassName("keks-preview")[0],
        audio: new Audio("KeksPreviewSong.mp3"),
        audioTiming: 38.7,
        audioVolume: 0.1,
    }
}

Object.entries(previews).forEach(([key, value]) => {
    function Pause() {
        value.audio.pause();
    }

    async function Play() {
        value.audio.volume = value.audioVolume;
        value.audio.currentTime = value.audioTiming;
        await value.audio.play();
    }

    value.node.addEventListener("mouseenter", Play)
    value.node.addEventListener("mouseleave", Pause)
    value.node.addEventListener("click", async (e) => {
        previewsWrapper.style = `   position: absolute;
                                    width: 100vw;
                                    height: 100vh;
                                    transition-duration: 0.5s;
                                    transform: translate(-100%);
        `
        value.node.removeEventListener("mouseleave", Pause);
        value.node.removeEventListener("mouseenter", Play);
        await Sleep(250);
        document.body.style = ` transition-duration: 0.5s;
                                filter: opacity(0)
        `
        await Sleep(500)
        document.cookie = `timing=${value.audio.currentTime};`
        document.location.href = `${key}Page/index.html`;
        console.log(value.audio.currentTime);
    })
})

document.getElementById("closeModalButton").addEventListener("click", async () => {
    const modal = document.getElementsByClassName("modal")[0];
    modal.style = `
                    transition: 0.5s;
                    height: 0px;
                    opacity: 0;
    `;
    await Sleep(500)
    document.body.removeChild(modal);
})
