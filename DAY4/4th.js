let x = 1;
let add = 0;
let c = 0;
while (x <= 100) {
  if(x % 2 == 0) {
    add = add+ x;
    c++;
  }
  x++;
}
console.log("The Average is", add / c);