//11. Design a method to display number of occurrence of each element in the array. 

let occurrence = [22, 3, 4, 5, 22, 3, 4, 1, 2, 22, 3, 66, 22, 2, 2];
let count = {};

for(let i=0;i<occurrence.length;i++) {
  let str = occurrence[i];
  if(count[str]) {
    count[str]++;
  }else {
    count[str] = 1;
  }
}
console.log(count);