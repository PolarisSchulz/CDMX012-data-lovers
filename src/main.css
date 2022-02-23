//import { example } from "./data.js";
import lolData from "./data/lol/lol.js";
import { filterFunction } from "./data.js";

//------------ Definición de variables, chí cheñol ------------//

// Variables para mosaico //
let championData = lolData.data;
let championCards = document.getElementById("champion-cards");

// Variables para filtros //
const filter_all = document.getElementById("filter_all");

//------------ Función para mosaico de campeones ------------//
function buildCards(champions) {
  championCards.innerHTML = "";
  let output = "";
  //function buildCarrousel() {
  //Integrar función para carrousel de tarjetas de campeón }

  for (let champion in champions) {
    if (champions.hasOwnProperty(champion)) {
      let championObjectData = champions[champion];
      //console.log(championObjectData);
      // let {
      //   blurb,
      //   id,
      //   image,
      //   img,
      //   info,
      //   key,
      //   name,
      //   partype,
      //   splash,
      //   stats,
      //   tags,
      //   title,
      //   version,
      // } = championObjectData;

      let id = championObjectData.id;
      let splash = championObjectData.splash;

      output += `
            <div class="${id}-class" champion-card >
                <img  class="champion-image"  src="${splash}" alt="${id}" onclick="goToChampion(${id})">
            </div>
            `;
    }
  }

  championCards.innerHTML += output;
}

//------------ Función para filtros por clase de campeón ------------//

document.querySelectorAll(".champClass_button").forEach((button) => {
  button.addEventListener("click", (event) => {
    let championDataArray = Object.values(championData);

    let finalArray = filterFunction(championDataArray, event.target.value);

    // console.log("finalArray => ", finalArray);

    buildCards(finalArray);
  });
});
filter_all.addEventListener("click", () => {
  buildCards(championData);
});
//------------ Función para segunda vista (goToChampion) ------------//
//function goToChampion(id) {
// obtener el dato id para poder obtener el objeto de ese campeon a partir de champion data
// mandarnos a champion.html
// llenar champion.html con los datos que obtuvimos del campeón
//}

buildCards(championData);
