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

// Low Difficulty Function
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
}

// Moderate Difficulty Function
export function midDifficultyFunction(allChampions) {
  let arrayOfMidDiffChampions = [];
  allChampions.forEach((champion) => {
    let difficulty = champion.info.difficulty;
    console.log(difficulty);
    const midDiffOne = 3;
    const midDiffTwo = 6;
    if (difficulty > midDiffOne && difficulty <= midDiffTwo) {
      arrayOfMidDiffChampions.push(champion);
    }
  });
  return arrayOfMidDiffChampions;
}

// High Difficulty Function
export function highDifficultyFunction(allChampions) {
  let arrayOfHighDiffChampions = [];
  allChampions.forEach((champion) => {
    let difficulty = champion.info.difficulty;
    console.log(difficulty);
    const highDiff = 6;
    if (difficulty > highDiff) {
      arrayOfHighDiffChampions.push(champion);
    }
  });
  return arrayOfHighDiffChampions;
}

// Attack Filter Function : High to Low
export function highToLowAttackFunction(allChampions) {
  let arrayOfHighToLowAttack = [];
  let arrayImaginarioQueNoHemosHecho = [];

  allChampions.forEach((champion) => {
    // declaramos championAttack , una variable que guarda el valor ataque (numero)
    let championAttack = champion.info.attack;
    //  primero un string de objetos, seguido por un number y ya despues hacer el array

    {
      campeon: ataque;
    }

    arrayImaginarioQueNoHemosHecho.push();
    // sort solo con el ataque (arreglo de objetos)

    // champion => el campeon actuaal
    // championAttack => el daño del campeón actual

    // necesitamos hacer una lista de todos los campeones y sus ataques,
    // teniendo la lista, la ordenamos de mayor a menor,
    // [{drMundo: 6},{aatrox: 2},{akali: 5} ...]

    // // se acomodan de mayor a menor ...

    // [{aatrox: 2},{akali: 5},{drMundo: 6} ...]

    // allChampions =>  ["aatrox", "ahri", "akali" ... ]
    // championsArrayOfHighToLowAttack => ["tryndamere", "dr mundo", "pantheon" ...]
  });
}
