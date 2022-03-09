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
    const highDiff = 6;
    if (difficulty > highDiff) {
      arrayOfHighDiffChampions.push(champion);
    }
  });

  return arrayOfHighDiffChampions;
}

// Abajo de todo esto vamos a refactorizar,, esto nose queda así de cochino

// Attack Filter Function : High to Low
export function highToLowAttackFunction(allChampions) {
  let sortingChampionDataArray = [];

  allChampions.forEach((champion) => {
    let currentChampionName = champion.name;
    let currentChampionAttack = champion.info.attack;

    sortingChampionDataArray.push({
      name: currentChampionName,
      attack: currentChampionAttack,
    });
  });

  let sortedArray = sortingChampionDataArray.sort(function (a, b) {
    return parseFloat(b.attack) - parseFloat(a.attack);
  });

  let sortedChampions = [];

  for (let i = 0; i < sortedArray.length; i++) {
    const sortedElement = sortedArray[i];
    let nameOfSortedChampion = sortedElement.name;

    allChampions.forEach((elementOfAllChampions) => {
      if (elementOfAllChampions.name == nameOfSortedChampion) {
        sortedChampions.push(elementOfAllChampions);
      }
    });
  }

  return sortedChampions;
}

// Attack Filter Function : Low to High
export function lowToHighAttackFunction(allChampions) {
  let sortingChampionDataArray = [];

  allChampions.forEach((champion) => {
    let currentChampionName = champion.name;
    let currentChampionAttack = champion.info.attack;

    sortingChampionDataArray.push({
      name: currentChampionName,
      attack: currentChampionAttack,
    });
  });

  let sortedArray = sortingChampionDataArray.sort(function (a, b) {
    return parseFloat(a.attack) - parseFloat(b.attack);
  });

  let sortedChampions = [];

  for (let i = 0; i < sortedArray.length; i++) {
    const sortedElement = sortedArray[i];
    let nameOfSortedChampion = sortedElement.name;

    allChampions.forEach((elementOfAllChampions) => {
      if (elementOfAllChampions.name == nameOfSortedChampion) {
        sortedChampions.push(elementOfAllChampions);
      }
    });
  }

  return sortedChampions;
}

// Defense Filter Function : High to Low
export function highToLowDefenseFunction(allChampions) {
  let sortingChampionDataArray = [];

  allChampions.forEach((champion) => {
    let currentChampionName = champion.name;
    let currentChampionAttack = champion.info.defense;

    sortingChampionDataArray.push({
      name: currentChampionName,
      defense: currentChampionAttack,
    });
  });

  let sortedArray = sortingChampionDataArray.sort(function (a, b) {
    return parseFloat(b.defense) - parseFloat(a.defense);
  });

  let sortedChampions = [];

  for (let i = 0; i < sortedArray.length; i++) {
    const sortedElement = sortedArray[i];
    let nameOfSortedChampion = sortedElement.name;

    allChampions.forEach((elementOfAllChampions) => {
      if (elementOfAllChampions.name == nameOfSortedChampion) {
        sortedChampions.push(elementOfAllChampions);
      }
    });
  }

  return sortedChampions;
}
// Defense Filter Function : Low to High
export function lowToHighDefenseFunction(allChampions) {
  let sortingChampionDataArray = [];

  allChampions.forEach((champion) => {
    let currentChampionName = champion.name;
    let currentChampionAttack = champion.info.defense;

    sortingChampionDataArray.push({
      name: currentChampionName,
      defense: currentChampionAttack,
    });
  });

  let sortedArray = sortingChampionDataArray.sort(function (a, b) {
    return parseFloat(a.defense) - parseFloat(b.defense);
  });

  let sortedChampions = [];

  for (let i = 0; i < sortedArray.length; i++) {
    const sortedElement = sortedArray[i];
    let nameOfSortedChampion = sortedElement.name;

    allChampions.forEach((elementOfAllChampions) => {
      if (elementOfAllChampions.name == nameOfSortedChampion) {
        sortedChampions.push(elementOfAllChampions);
      }
    });
  }

  return sortedChampions;
}
