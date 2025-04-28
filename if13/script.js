let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));
let c = parseFloat(prompt("Son kiriting"));

if (a > b > c || c > b > a) {
  console.log(b);
} else if (b > a > c || c > a > b) {
  console.log(a);
} else if (b > c > a || a > c > b) {
  console.log(c);
} else {
  console.log("Xatolik!");
}
