"use strict";
const reportAcudits = [];
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
    })
        .catch(error => {
        console.error('Error al cargar la API', error);
    });
}
window.addEventListener("load", function (event) {
    callApi();
});
function registerScore(score) {
    const jokeId = document.getElementById("joke");
    if (jokeId && jokeId.textContent) {
        const jokeText = jokeId.textContent.trim();
        const datos = new Date().toISOString();
        const report = {
            joke: jokeText,
            score: score,
            date: datos,
        };
        reportAcudits.push(report);
    }
    console.log(reportAcudits);
}
//# sourceMappingURL=index.js.map