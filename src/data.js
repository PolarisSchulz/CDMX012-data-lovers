// estas funciones son de ejemplo

//export const example = () => {
// return "example";
//};

// Filter Function

export function filterFunction(allChampions, championClass) {
  let arrayOfChampionsWithTags = [];
  allChampions.forEach((champion) => {
    let tags = champion.tags;
    if (tags.includes(championClass)) {
      arrayOfChampionsWithTags.push(champion);
    }
  });
  return arrayOfChampionsWithTags;
}

// personajes de baja dificultad
export function lowDifficultyFunction(allChampions) {
  let arrayOfLowDiffChampions = [];
  allChampions.forEach((champion) => {
    let difficulty = champion.info.difficulty;
    console.log(difficulty);
    const lowDiff = 3;
    if (difficulty <= lowDiff) {
      arrayOfLowDiffChampions.push(champion);
    }
  });
  return arrayOfLowDiffChampions;
  };  

// Moderate Difficulty Function




// Attack Filter Function : High to Low
export function   (allChampions) {
  let arrayOfHighToLowAttack = [];
  let arrayImaginarioQueNoHemosHecho = []
  allChampions.forEach((champion) => {
    // declaramos championAttack , una variable que guarda el valor ataque (numero)
    let championAttack = champion.info.attack;

      {campeon: ataque}
    arrayImaginarioQueNoHemosHecho.push()
    // sort solo con el ataque


    // champion => el campeon actuaal 
    // championAttack => el daño del campeón actual
    
    // necesitamos hacer una lista de todos los campeones y sus ataques, 
    // teniendo la lista, la ordenamos de mayor a menor, 
    // [{drMundo: 6},{aatrox: 2},{akali: 5} ...]

    // // se acomodan de mayor a menor ... 

    // [{aatrox: 2},{akali: 5},{drMundo: 6} ...]



    // allChampions =>  ["aatrox", "ahri", "akali" ... ]
    // championsArrayOfHighToLowAttack => ["tryndamere", "dr mundo", "pantheon" ...] 
