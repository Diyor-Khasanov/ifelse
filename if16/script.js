function modifyABC(a, b, c) {
  if (a < b && b < c) {
    console.log(a * 2, b * 2, c * 2);
  } else {
    console.log(-a, -b, -c);
  }
}

modifyABC(2, 5, 7);
