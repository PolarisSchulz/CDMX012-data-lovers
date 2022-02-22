//import { example } from "./data.js";
import lolData from "./data/lol/lol.js";

//------------ Definición de variables, chí cheñol ------------//

// Variables para mosaico //
let championData = lolData.data;
let championCards = document.getElementById("champion-cards");

// Variables para filtros //

//------------ Función para mosaico de campeones ------------//
function buildCards() {
  let output = "";

  //function buildCarrousel() {
  //Integrar función para carrousel de tarjetas de campeón }

  for (let champion in championData) {
    if (championData.hasOwnProperty(champion)) {
      let championObjectData = championData[champion];
      console.log(championObjectData);
      let {
        blurb,
        id,
        image,
        img,
        info,
        key,
        name,
        partype,
        splash,
        stats,
        tags,
        title,
        version,
      } = championObjectData;

      output += `
            <div class="${id}-class" champion-card >
                <img  class="champion-image"  src="${splash}" alt="${id}" onclick="goToChampion(${id})">
            </div>
            `;
    }
  }

  championCards.innerHTML += output;
}

//------------ Función para segunda vista (goToChampion) ------------//
function goToChampion(id) {
  // obtener el dato id para poder obtener el objeto de ese campeon a partir de champion data
  // mandarnos a champion.html
  // llenar champion.html con los datos que obtuvimos del campeón
}

buildCards();
