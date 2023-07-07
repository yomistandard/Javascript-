var schools=0

while(schools<50){
   schools++
}
console.log(schools);

const num1 = 15;
const num2 = 25;

// Define a function to calculate GCD
function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1% num2);
}

// Call the function with the two numbers
const result = gcd(num1, num2);
console.log(" ${num1} ${num2} ${result}");