let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));

if (a != b) {
  if (a > b) {
    console.log(a);
  } else if (a < b) {
    console.log(b);
  } else {
    console.log("Xatolik!");
  }
} else {
  console.log(0);
}
