// Best Optimization
/* Score: 200
2,525 ops/s (Higher is better)
Cyclomatic complexity: 3 (Lower is better)
Maintainability: 57% (Higher is better) */
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return (
    giftsCities
      .sort((a, b) => b - a) // sort the array in descend [ 12, 11, 7, 5, 3 ]
      // total = acc; num = curr
      .reduce((total, num) => {
        if (
          maxCities == 0 ||
          total + num > maxGifts ||
          total + num === maxGifts - 1
        ) {
          return total;
        }
        maxCities--; // use posftfix decrement operator because if this is true, we need to rest the cities
        return total + num;
      }, 0)
  );
}

// using Backtracking algorithms
function getMaxGiftsBacktracking(giftsCities, maxGifts, maxCities) {
  return Math.max(
    ...giftsCities
      .sort((a, b) => b - a) // sort the array in descend [ 12, 11, 7, 5, 3 ]
      .reduce(
        (result, _, i) => (
          i && giftsCities.unshift(giftsCities.pop()),
          (i = giftsCities
            .slice(0, maxCities)
            .reduce((acc, curr) => (acc += curr), 0)),
          i <= maxGifts && result.push(i),
          i - giftsCities[maxCities - 1] <= maxGifts &&
            result.push(i - giftsCities[maxCities - 1]),
          result
        ),
        []
      ),
    0
  );
}

// Decent appoach
/* function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let combinaciones = [];
  combinaciones.push([], [giftsCities[0]]);
  giftsCities.shift();

  giftsCities.map((x) => {
    const newList = combinaciones.map((combinacion) => {
      let _combinacion = [...combinacion];
      if (_combinacion.length < maxCities) {
        _combinacion.push(x);
      }
      return _combinacion;
    });
    combinaciones = combinaciones.concat(newList);
  });

  combinaciones.shift();

  return Math.max(
    ...combinaciones.map((x) => {
      let sum = x.reduce((total, num) => total + num);
      return sum > maxGifts ? 0 : sum;
    })
  );
} */

module.exports = {
  getMaxGifts,
};
