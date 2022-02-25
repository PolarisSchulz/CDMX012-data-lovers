//import { example } from "./data.js";
import lolData from "./data/lol/lol.js";
import { filterFunction, lowDifficultyFunction, highToLowAttackFunction } from "./data.js";

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
    let finalClassArray = filterFunction(championDataArray, event.target.value);
    buildCards(finalClassArray);
  });
});

filter_all.addEventListener("click", () => {
  buildCards(championData);
});

//------------ Función para filtros por dificultad ------------//
const lowDifficulty = document.querySelector(".lowDifficulty");
const moderateDifficulty = document.querySelector(".moderateDifficulty");
const highDifficulty = document.querySelector(".highDifficulty");

// Low Difficulty //
lowDifficulty.addEventListener("click", (event) => {
  let championDataArray = Object.values(championData);
  const rangeDifficulty = 3;
  const getLowDifficulty =  championDataArray.filter((e)=>( e.info.difficulty <= rangeDifficulty));
  //console.log("Low difficulty champs from", getLowDifficulty);
  let finalLowDiffArray = lowDifficultyFunction(championDataArray);
  // console.log("Revisando array de dificultad baja desde", finalLowDiffArray);
  buildCards(finalLowDiffArray);
});

// Moderate Difficulty //



//------------ Función para filtros por ataque/defensa ------------//
const highestAttack = document.querySelector(".highestAttack");
const lowestAttack = document.querySelector(".lowestAttack");
const highestDefense = document.querySelector(".highestDefense");
const lowestDefense = document.querySelector(".lowestDefense");

highestAttack.addEventListener("click", (event) => {
  let championDataArray = Object.values(championData);
  let finalHighAtkArray = highToLowAttackFunction(championDataArray);
  console.log(finalHighAtkArray)


});

//------------ Función para segunda vista (goToChampion) ------------//
//function goToChampion(id) {
// obtener el dato id para poder obtener el objeto de ese campeon a partir de champion data
// mandarnos a champion.html
// llenar champion.html con los datos que obtuvimos del campeón
// }

buildCards(championData);
