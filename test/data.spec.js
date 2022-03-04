import {
  filterFunction,
  lowDifficultyFunction,
  midDifficultyFunction,
  highDifficultyFunction,
  highToLowAttackFunction,
  lowToHighAttackFunction,
  highToLowDefenseFunction,
  lowToHighDefenseFunction,
} from "../src/data.js";
// // // // // // // // // // // // // // // //
describe("filterFunction", () => {
  it("is a function", () => {
    expect(typeof filterFunction).toBe("function");
  });

  it("Show filter by champion class", () => {
    const championData = [{ tags: "Fighter" }, { tags: "Tank" }];
    expect(filterFunction(championData, "Tank")).toEqual([{ tags: "Tank" }]);
  });
});
// // // // // // // // // // // // // // // // // // // // //
describe("lowDifficultyFunction", () => {
  it("is a function", () => {
    expect(typeof lowDifficultyFunction).toBe("function");
  });

  it("Show champions by low difficulty", () => {
    const championData = [
      { info: { difficulty: 3 } },
      { info: { difficulty: 6 } },
      { info: { difficulty: 5 } },
      { info: { difficulty: 3 } },
    ];
    expect(lowDifficultyFunction(championData)).toStrictEqual([
      { info: { difficulty: 3 } },
      { info: { difficulty: 3 } },
    ]);
  });
});
// // // // // // // // // // // // // // // // // // // // // //
describe("midDifficultyFunction", () => {
  it("is a function", () => {
    expect(typeof midDifficultyFunction).toBe("function");
  });

  it("Show champions by moderate difficulty", () => {
    const championData = [
      { info: { difficulty: 3 } },
      { info: { difficulty: 6 } },
      { info: { difficulty: 5 } },
      { info: { difficulty: 4 } },
    ];
    expect(midDifficultyFunction(championData)).toStrictEqual([
      { info: { difficulty: 6 } },
      { info: { difficulty: 5 } },
      { info: { difficulty: 4 } },
    ]);
  });
});
// // // // // // // // // // // // // // // // // // // // // //
describe("highDifficultyFunction", () => {
  it("is a function", () => {
    expect(typeof highDifficultyFunction).toBe("function");
  });

  it("Show champions by high difficulty", () => {
    const championData = [
      { info: { difficulty: 3 } },
      { info: { difficulty: 6 } },
      { info: { difficulty: 7 } },
      { info: { difficulty: 5 } },
    ];
    expect(highDifficultyFunction(championData)).toStrictEqual([
      { info: { difficulty: 7 } },
    ]);
  });
});
// // // // // // // // // // // // // // // // // // //
describe("highToLowAttackFunction", () => {
  it("is a function", () => {
    expect(typeof highToLowAttackFunction).toBe("function");
  });

  it("Show champions by high to low attack", () => {
    const championData = [
      { name: "Aatrox", info: { attack: 3 } },
      { name: "Ahri", info: { attack: 6 } },
      { name: "Akali", info: { attack: 7 } },
      { name: "Alistar", info: { attack: 5 } },
    ];
    expect(highToLowAttackFunction(championData)).toStrictEqual([
      { name: "Akali", info: { attack: 7 } },
      { name: "Ahri", info: { attack: 6 } },
      { name: "Alistar", info: { attack: 5 } },
      { name: "Aatrox", info: { attack: 3 } },
    ]);
  });
});

// // // // // // // // // // // // // // // // // // //
describe("lowToHighAttackFunction", () => {
  it("is a function", () => {
    expect(typeof lowToHighAttackFunction).toBe("function");
  });

  it("Show champions by low to high attack", () => {
    const championData = [
      { name: "Aatrox", info: { attack: 3 } },
      { name: "Ahri", info: { attack: 6 } },
      { name: "Akali", info: { attack: 7 } },
      { name: "Alistar", info: { attack: 5 } },
    ];
    expect(lowToHighAttackFunction(championData)).toStrictEqual([
      { name: "Aatrox", info: { attack: 3 } },
      { name: "Alistar", info: { attack: 5 } },
      { name: "Ahri", info: { attack: 6 } },
      { name: "Akali", info: { attack: 7 } },
    ]);
  });
});

// // // // // // // // // // // // // // // // //
describe("highToLowDefenseFunction", () => {
  it("is a function", () => {
    expect(typeof highToLowDefenseFunction).toBe("function");
  });

  it("Show champions by high to low defense function", () => {
    const championData = [
      { name: "Aatrox", info: { defense: 3 } },
      { name: "Ahri", info: { defense: 6 } },
      { name: "Akali", info: { defense: 7 } },
      { name: "Alistar", info: { defense: 5 } },
    ];
    expect(highToLowDefenseFunction(championData)).toStrictEqual([
      { name: "Akali", info: { defense: 7 } },
      { name: "Ahri", info: { defense: 6 } },
      { name: "Alistar", info: { defense: 5 } },
      { name: "Aatrox", info: { defense: 3 } },
    ]);
  });
});

// // // // // // // // // // // // // // // // //
describe("lowToHighDefenseFunction", () => {
  it("is a function", () => {
    expect(typeof lowToHighDefenseFunction).toBe("function");
  });

  it("Show champions by low to high defense function", () => {
    const championData = [
      { name: "Aatrox", info: { defense: 3 } },
      { name: "Ahri", info: { defense: 6 } },
      { name: "Akali", info: { defense: 7 } },
      { name: "Alistar", info: { defense: 5 } },
    ];
    expect(lowToHighDefenseFunction(championData)).toStrictEqual([
      { name: "Aatrox", info: { defense: 3 } },
      { name: "Alistar", info: { defense: 5 } },
      { name: "Ahri", info: { defense: 6 } },
      { name: "Akali", info: { defense: 7 } },
    ]);
  });
});

// describe.skip("anotherExample", () => {
//   it("is a function", () => {
//     expect(typeof anotherExample).toBe("function");
//   });

//   it("returns `anotherExample`", () => {
//     expect(anotherExample()).toBe("OMG");
//   });
// });
