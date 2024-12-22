function Sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

function getCookie(name) {
    const cookie = document.cookie;
    const cookieobj = cookie.split(";");
    const cookiesObjects = cookieobj.reduce((prev, curr) => {
        const [key, value] = curr.split("=");
        return {...prev, [key]: value};
    }, {})
    return cookiesObjects[name]
}