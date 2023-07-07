function greet(){
    console.log("Good morning sir");
}
greet();

function greet(person){
console.log(`Hi ${person}!`);
}
greet("yomi");

function findlargest(x,y){
    if(x>y){
        console.log(`${x}is larger`);
    }
    else if(x<y){
        console.log(`${y} is larger`);
    }
    else{
        console.log(`${x} and ${y} are equal`);
    }
}
 findlargest(6,7);

 function add(x,y){
    return x+y;
 }
 const sum=add(5,3)
 console.log(sum);
    
 
 let a = 40;
let b = 20;

function parentFunc(){
	let  name= "doe"

	function childFunc(){
		console.log(`${name} is ${a - b} years old`); 
      }
    return childFunc();
}
parentFunc();
function greeting(name,message="hello"){
    console.log(`${message} ${name}`)
}
greeting("yomi");

function sayHi(message,...name){
    name.forEach(name=>console.log(`${message} ${name}`))
}
sayHi('hello','yomi','fola','bola')

let username='john'
function showmessage(){
    let message='hello' + username;
    console.log(message);
}
showmessage('message');

function checkAge(age) {
    if (age >= 18) {
      return true;
    }
  }
  
  let age =18;
  
  if ( checkAge(age) ) {
    console.log( 'Access granted' );
  } else {
    console.log( 'Access denied' );
  }
  function showMovie(age) {
    if ( checkAge(age) ) {
      return;
    }
  }
  
    console.log("Showing you the movie" );
    //FUNCTION HOISTING

  let sum= function(num1,num2){
    console.log(num1+num2)
  }
  sum(20,10)