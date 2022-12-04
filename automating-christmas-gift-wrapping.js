function wrapping(gifts) {
  let newGifts = gifts.map((gift) => {
    let giftLength = gift.length + 2,
      wrappedSymbol = "*";
    const wrappedGift = wrappedSymbol.repeat(giftLength);
    const wrapped = wrappedGift.concat(`\n*${gift}*\n`).concat(wrappedGift);

    return wrapped;
  });

  console.log(newGifts);
  return newGifts;
}

wrapping(["cat", "game", "socks"]);
