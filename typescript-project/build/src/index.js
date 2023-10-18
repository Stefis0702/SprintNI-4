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
function infMeteo() {
    const options = {
        headers: {
            "Accept": "application/json"
        }
    };
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019", options)
        .then((res) => res.json())
        .then(data => {
        const timeInfo = (document.getElementById('time'));
        timeInfo.innerHTML = `
            <p>${data.metadescripcion} ${data.temperatura_actual}°C</p>
            
          `;
        console.log(data);
    })
        .catch(error => {
        console.error('Error al cargar la API', error);
    });
}
window.addEventListener("load", function (event) {
    infMeteo();
    callApi();
});
//# sourceMappingURL=index.js.map