function findEqualThree(a, b, c, d) {
  if (a === b && b === c) console.log(4);
  else if (a === b && b === d) console.log(3);
  else if (a === c && c === d) console.log(2);
  else if (b === c && c === d) console.log(1);
  else console.log(0);
}

findEqualThree(7, 7, 7, 3);
