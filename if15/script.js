function maxSumPair(a, b, c) {
  const sum1 = a + b;
  const sum2 = a + c;
  const sum3 = b + c;

  if (sum1 >= sum2 && sum1 >= sum3) {
    console.log(a, b);
  } else if (sum2 >= sum1 && sum2 >= sum3) {
    console.log(a, c);
  } else {
    console.log(b, c);
  }
}

// Misol
maxSumPair(5, 8, 3); // 5 8
