
console.log("BELAJAR ARRAY JS");

let myArray = ["Java", "PHP", "Ruby", "Dart"];

console.log(myArray[0]);

myArray.splice(2,0,"tes");
// menambah data ke array
myArray.push("Java Script");
console.log(myArray);

// mengeluarkan data dari elemen terakhir di array
myArray.pop();
console.log(myArray);

// menghapus array dengan indexnya
myArray.splice(1,1);
console.log(myArray);

// spreed operator
console.log(...myArray);

let others = ["php", "Pascal", "Python"];

let allLenguange = [...myArray, ...others];
console.log(allLenguange);
