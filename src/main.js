import { example } from "./data.js";
import lolData from "./data/lol/lol.js";

let championData = lolData.data;
let championCards = document.getElementById("champion-cards");

function buildCards() {
  let output = "";

  //function buildCarrousel() {
  // Integrar función para carrousel de tarjetas de campeón }

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
              
                <img  class="champion-image"  src="${splash}" alt="${id}">
            </div>
            `;
    }
  }

  
  championCards.innerHTML += output;
}

buildCards();
