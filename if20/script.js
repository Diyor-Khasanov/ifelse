function closestPoint(ax, ay, bx, by, cx, cy) {
  let dAB = Math.hypot(ax - bx, ay - by);
  let dAC = Math.hypot(ax - cx, ay - cy);

  if (dAB < dAC) {
    console.log("B nuqta eng yaqin:", dAB);
  } else {
    console.log("C nuqta eng yaqin:", dAC);
  }
}

closestPoint(0, 0, 1, 1, 5, 5);
