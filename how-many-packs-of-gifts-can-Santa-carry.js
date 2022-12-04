function distributeGifts(packOfGifts, reindeers) {
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
  return Math.floor(maximumGiftPacks);
}
distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"]); // 2
