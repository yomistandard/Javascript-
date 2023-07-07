var num1=20
var num2=30

//num1 +=5
//console.log(num1)
//-=
//num1-=10
//console.log(num1)
//%=

num1%=6
console.log(num1)

var x=1
x--;
console.log(x)

//comparision operators
if(5!==5){console.log(true)}else{console.log(false)}
//ternary operators

100<20 ? console.log(true) : console.log(false)

var a = 10;
var b = 5;
var c = 12;
var e = 8;
var d;
d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
console.log(d);
if (d == 1){
console.log((a * (c - b) / e + (b + c)));
} else{
console.log((e * (c + a) / (b + c) + a));
}
