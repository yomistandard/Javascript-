for(let i=1; i<=10; i++){
        console.log(i);
    }

for( let i=50;i>=0; i-=10){
    console.log(i);
}

let a = 20
for (i=1;i<=a;i++)
{
  if(i%2==0){
    console.log(i)
  }
}
//* while loop*//



let targetNum=Math.floor(Math.random()*10);
let guess=Math.floor(Math.random()*10);
while(guess !==targetNum){
  console.log('Guessed${guess} incorrect!');
  guess=Math.floor(Math.random()*10);
}


let num=0;
while(num<10){
  console.log(num);
  num++;
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let k = 2; k < i; k++) { 
    if (i % k== 0) continue nextPrime; 
  }

  console.log( i );
}

for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    break;
  }
  console.log('Total elephants: ' + i);
}


