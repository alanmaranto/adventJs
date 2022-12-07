const {
  distributeGifts,
} = require("./how-many-packs-of-gifts-can-Santa-carry");

test("Test #1 - Should return a number", () => {
  expect(
    typeof distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
  ).toStrictEqual("number");
});

test('Test #2 - distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])', () => {
  expect(
    distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])
  ).toStrictEqual(2);
});

test("Test #3 - distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {
  expect(distributeGifts(["a", "b", "c"], ["d", "e"])).toStrictEqual(1);
});

test("Test #4 - distributeGifts(['videogames', 'console'], ['midu'])", () => {
  expect(distributeGifts(["videogames", "console"], ["midu"])).toStrictEqual(0);
});

test("Test #5 - distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
  expect(
    distributeGifts(
      ["game", "videoconsole", "computer"],
      [
        "midudev",
        "pheralb",
        "codingwithdani",
        "carlosble",
        "blasco",
        "facundocapua",
        "madeval",
        "memxd",
      ]
    )
  ).toStrictEqual(5);
});

test("Test #6 - distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
  expect(
    distributeGifts(
      ["music"],
      [
        "midudev",
        "pheralb",
        "codingwithdani",
        "carlosble",
        "blasco",
        "facundocapua",
        "madeval",
        "memxd",
      ]
    )
  ).toStrictEqual(26);
});
