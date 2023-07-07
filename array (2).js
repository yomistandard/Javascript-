let colors=['red','blue','green'];
console.log(colors[0]='orange');

//*array method*//push
const animals=['dog','cat','bear'];
animals.push('bird');
console.log(animals);

//*array method*//pop
const animalstypes=['cat','dog','camel']
animalstypes.pop('camel')
console.log(animalstypes)

//*shift*//
const birds=['peacock','peacock','owl'];
birds.shift('peacock');
console.log(birds)

//*unshift*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);

/*slice*/
const fruit = ["house", "car", "wristwatch", "benz", "bugatti"];
const citrus = fruits.slice(1, 3);
console.log(fruit);

//*sort*//
const collection = ["house", "car", "wristwatch", "benz"];
fruits.sort()
console.log(collection);

//*splice*//
const order= ["Banana", "Orange", "Apple", "Mango"];
order.splice(2, 0, "Lemon", "awusa");
console.log(order);

//*concat*//
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
//*refrence 4th  *//
const arr = [ 1, 2, 3 ];

for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

