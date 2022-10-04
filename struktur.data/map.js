
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["Kuala Lumpur", "Malasyia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
]);

// mencetak isi dari berapa elemen dalam map
console.log(capital.size);

// mendapatkan nilai berdasarkan key tertentu
console.log(capital.get("Jakarta"));


// menambahkan pasangan key value
capital.set("New Delhi", "India");

console.log(capital.size);

