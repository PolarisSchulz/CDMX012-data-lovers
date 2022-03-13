//import { example } from "./data.js";
import lolData from "./data/lol/lol.js";
import {
  filterFunction,
  lowDifficultyFunction,
  midDifficultyFunction,
  highDifficultyFunction,
  highToLowAttackFunction,
  lowToHighAttackFunction,
  highToLowDefenseFunction,
  lowToHighDefenseFunction,
} from "./data.js";

//------------ Definición de variables, chí cheñol ------------//

// Variables para mostrar campeones //
let championData = lolData.data;
let championCards = document.getElementById("champion-cards");
let championContainer = document.getElementById("champion-container");

// Variables para filtros //
const filter_all = document.getElementById("filter_all");

//------------ Función para mosaico de campeones ------------//
function buildCards(champions) {
  championCards.innerHTML = "";
  let output = "";
  //function buildCarrousel() {
  //Integrar función para carrousel de tarjetas de campeón }

  for (let champion in champions) {
    // eslint-disable-next-line no-prototype-builtins
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
            <div class="${id}-class  champion-card"} >
                <img  class="champion-image"  id= ${id}  src="${splash}" alt="${id}" ">
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
lowDifficulty.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalLowDiffArray = lowDifficultyFunction(championDataArray);
  buildCards(finalLowDiffArray);
});

// Moderate Difficulty //
moderateDifficulty.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalMidDiffArray = midDifficultyFunction(championDataArray);
  buildCards(finalMidDiffArray);
});

// High Difficulty //
highDifficulty.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalHighDiffArray = highDifficultyFunction(championDataArray);
  buildCards(finalHighDiffArray);
});

//------------ Función para filtros por ataque/defensa ------------//
const highestAttack = document.querySelector(".highestAttack");
const lowestAttack = document.querySelector(".lowestAttack");
const highestDefense = document.querySelector(".highestDefense");
const lowestDefense = document.querySelector(".lowestDefense");

// abajo de esto hay que refactorizar, esto no se queda asi de cochino

highestAttack.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalHighAtkArray = highToLowAttackFunction(championDataArray);
  buildCards(finalHighAtkArray);
});
lowestAttack.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalLowAtkArray = lowToHighAttackFunction(championDataArray);
  buildCards(finalLowAtkArray);
});
highestDefense.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalHighDefArray = highToLowDefenseFunction(championDataArray);
  buildCards(finalHighDefArray);
});
lowestDefense.addEventListener("click", () => {
  let championDataArray = Object.values(championData);
  let finalLowDefArray = lowToHighDefenseFunction(championDataArray);
  buildCards(finalLowDefArray);
});

//------------ Función para segunda vista (goToChampion) ------------//
//function goToChampion(id) {
// obtener el dato id para poder obtener el objeto de ese campeon a partir de champion data
// mandarnos a champion.html
// llenar champion.html con los datos que obtuvimos del campeón
// }

// declaracion de funcion, no puedo ejecutar algo que no esta declarado
function clickFunction(e) {
  let champion = e.target.id;
  buildChampion(champion);
  // console.log("click on champion", champion)
}

function setOnClickEvents() {
  let cards = document.getElementsByClassName("champion-card");
  // console.log("estas son las cards ", cards)
  for (const card of cards) {
    card.addEventListener("click", clickFunction);
  }
}

function buildChampion(champion) {
  // champion = el string del nombre del campeon seleccionado
  let currentChampion = championData[champion];
  // champion
  // console.log(currentChampion);
  // hide cards
  hideElement(championCards);
  // show card
  showElement(championContainer);

  // populate champion container with currentChampion info
  populateChampion(currentChampion);
}

function hideElement(element) {
  element.classList.remove("display-on");
  element.classList.add("display-off");
}

function showElement(element) {
  element.classList.remove("display-off");
  element.classList.add("display-on");
}

function populateChampion(currentChampion) {
  //First section
  let name = currentChampion.name;
  let title = currentChampion.title;
  let splash = currentChampion.splash;
  let blurb = currentChampion.blurb;
  let tags = currentChampion.tags;
  let difficulty = currentChampion.info.difficulty;
  // Second senction: Stats
  let attack = currentChampion.info.attack;
  let defense = currentChampion.info.defense;
  let magic = currentChampion.info.magic;
  // Third section: substats
  let hp = currentChampion.stats.hp;
  let mp = currentChampion.stats.mp;
  let armor = currentChampion.stats.armor;
  let spellblock = currentChampion.stats.spellblock;

  // Stats to DOM section
  document.getElementById("champion-title").innerHTML = title;
  document.getElementById(
    "champion-face"
  ).style.backgroundImage = `url('${splash}')`;
  document.getElementById("champion-name").innerHTML = name;
  document.getElementById("champion-blurb").innerHTML = blurb;
  document.getElementById("champion-tags").innerHTML = tags;
  document.getElementById("champion-difficulty").innerHTML = difficulty;
  document.getElementById("champion-attack").innerHTML = attack;
  document.getElementById("champion-defense").innerHTML = defense;
  document.getElementById("champion-magic").innerHTML = magic;
  document.getElementById("champion-hp").innerHTML = hp;
  document.getElementById("champion-mp").innerHTML = mp;
  document.getElementById("champion-armor").innerHTML = armor;
  document.getElementById("champion-spellblock").innerHTML = spellblock;
}

const mainMenuButton = document.getElementById("mainMenuButton");

mainMenuButton.addEventListener("click", () => {
  hideElement(championContainer);
  showElement(championCards);
});

buildCards(championData);

setOnClickEvents();
