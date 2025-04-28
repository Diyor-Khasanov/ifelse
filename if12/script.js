let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));
let c = parseFloat(prompt("Son kiriting"));

if (a > b && a > c) {
  console.log(a);
} else if (a < b && b > c) {
  console.log(b);
} else if (c > b && a < c) {
  console.log(c);
} else {
  console.log("Xatolik!");
}
