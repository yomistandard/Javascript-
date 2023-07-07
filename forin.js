const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
  };
  
  for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
  }
  const array = [1, 2, 3];

for (const i in array) {
  console.log(i);
}

//*for...of*//
const arr = [ "Fred", "Tom", "Bob" ];

for (let i of arr) {
  console.log(i);
}

const m = new Map();
m.set(1, "black");
m.set(2, "brown");

for (let n of m) {
  console.log(n);
}

const s = new Set();
s.add(1);
s.add("black");

for(let n of s) {
    console.log(n);
}
