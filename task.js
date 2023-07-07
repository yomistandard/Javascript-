let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//*prime number *//
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i% j == 0) continue nextPrime;
  }
console.log(i);
}

function fortuneteller(jobtitle,geographiclocation,patnerName,children){
console.log(`you will be a ${jobtitle} in ${geographiclocation} and married to ${patnerName} with  ${children} kids`);
}
fortuneteller("programmer","Nigeria","justina",5); 

function calccircumfrences(){

}