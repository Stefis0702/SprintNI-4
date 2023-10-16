"use strict";
function callApi() {
    const options = {
        headers: {
            "Accept": "application/json"
        }
    };
    fetch("https://icanhazdadjoke.com/", options)
        .then((res) => res.json())
        .then(res => {
        const jokeElement = (document.getElementById("joke"));
        jokeElement.innerHTML = res.joke;
        console.log(res);
    });
}
//# sourceMappingURL=index.js.map