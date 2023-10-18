

const reportAcudits:Array<{ joke: string, score: number, date: string }> = [];

 function callApi(){
  const options = {
    headers: {
      "Accept": "application/json"
    }
  }
  fetch ("https://icanhazdadjoke.com/", options)
    .then ((res)=> res.json())
    .then (res =>{
      const jokeElement:HTMLElement = <HTMLElement>(document.getElementById("joke"));
      jokeElement.innerHTML=res.joke;
      console.log(res)
    })
    .catch(error => {
      console.error('Error al cargar la API', error);
  });
}



function registerScore(score:number){
        const jokeId=document.getElementById("joke");
               if (jokeId && jokeId.textContent) {
              const jokeText = jokeId.textContent.trim();
              const datos = new Date().toISOString();

              const report: { joke: string, score: number, date: string } = {
                joke: jokeText,
                score: score,
                date: datos,
              };

              reportAcudits.push(report);
              }
              console.log(reportAcudits)
}

function infMeteo(){
  const options = {
    headers: {
      "Accept": "application/json"
    }
  }
  fetch ("https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019", options)
    .then ((res)=> res.json())
    .then (data =>{
      const timeInfo:HTMLElement = <HTMLElement>(document.getElementById('time'));
          timeInfo.innerHTML = `
            <p>${data.metadescripcion} ${data.temperatura_actual}°C</p>
            
          `;
      console.log(data)
    })
    .catch(error => {
      console.error('Error al cargar la API', error);
  });
  
}

window.addEventListener("load", function (event) {
  infMeteo();
  callApi();
  
})



