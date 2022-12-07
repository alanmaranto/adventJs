// First solution
/* function distributeGifts(packOfGifts, reindeers) {
  let totalGiftWeight = 0;
  let maximumWeightLimit = 0;
  for (i = 0; i < packOfGifts.length; i++) {
    const giftWeight = packOfGifts[i].length;
    totalGiftWeight += giftWeight;
  }
  for (i = 0; i < reindeers.length; i++) {
    const reindeerWeightLimit = reindeers[i].length * 2;
    maximumWeightLimit += reindeerWeightLimit;
  }
  const maximumGiftPacks = maximumWeightLimit / totalGiftWeight;
  console.log(maximumGiftPacks);
  return Math.floor(maximumGiftPacks);
} */

// Second solution
/* const distributeGifts = (packOfGifts, reindeers) => {
  const packOfGiftsSize = packOfGifts.join("").length;
  const reindeersSize = reindeers.join("").length * 2;
  return Math.floor(reindeersSize / packOfGiftsSize);
}; */

function distributeGifts(packOfGifts, reindeers) {
  const packOfGiftsWeight = packOfGifts.reduce(
    (acc, gift) => acc + gift.length,
    0
  );
  const reindeersWeightLimit = reindeers.reduce(
    (acc, reindeer) => acc + 2 * reindeer.length,
    0
  );

  const totalPacks = Math.floor(reindeersWeightLimit / packOfGiftsWeight);
  console.log(totalPacks);
  return totalPacks;
}

distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]); // 2

module.exports = {
  distributeGifts,
};
