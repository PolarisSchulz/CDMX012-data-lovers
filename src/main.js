// estas funciones son de ejemplo

//export const example = () => {
// return "example";
//};

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
