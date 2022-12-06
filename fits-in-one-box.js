/* Score: 170
2,429 ops/s (Higher is better)
Cyclomatic complexity: 1 (Lower is better)
Maintainability: 58% (Higher is better) */

function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l * a.w * a.h - b.l * b.w * b.h) // Order by volume in descending order
    .every((currentBox, i) => {
      if (i === boxes.length - 1) return true; // Ignore the firsst box cause there's no box in index-1

      const prev = boxes[i - 1];

      return (
        currentBox.l > prev.l && currentBox.w > prev.w && currentBox.h > prev.h // Validate if the previous box is bigger than the current one
      );
    });
}

fitsInOneBox([
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]); // false

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]); // true

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]); // false

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2 },
]); // false

fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]); // true
