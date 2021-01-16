const URL = "https://ghibliapi.herokuapp.com";

async function ghibliFetch(endpoint){
  const response = await fetch(`${URL}/${endpoint}`);
  const data = response.json();
  return data
}

const getFilms = document.getElementById("getfilms");

getFilms.onclick = () => {
    ghibliFetch("films")
    .then( films => {
        const cardRow = document.getElementById('cardrow')
        let card = "";
        for (let i=0; i < films.length; i++) {
       
            card += `
        <div class="card" app-id="${films[i].id}">
        <div class="cardinfo">    
            <h3>${films[i].title}</h3>
            <p>Producer: ${films[i].producer}</p>
            <p>Director: ${films[i].director}</p>
            <p>Release Date: ${films[i].release_date}</p>
            <p>${films[i].description}</p>
        
            </div>
            <button class="charbutton">See Film Characters</button>
        </div>`
        }
        cardRow.innerHTML = card
        
    })
}

