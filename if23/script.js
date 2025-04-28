function findFourthVertex(x1, y1, x2, y2, x3, y3) {
  let x4 = x1 === x2 ? x3 : x1 === x3 ? x2 : x1;
  let y4 = y1 === y2 ? y3 : y1 === y3 ? y2 : y1;
  console.log(`(${x4}, ${y4})`);
}

findFourthVertex(0, 0, 0, 2, 3, 0);
