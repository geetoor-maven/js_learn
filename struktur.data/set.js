
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

// menambah data ke dalam set
numberSet.add(5);
numberSet.add(10);
numberSet.add(9);
numberSet.add(9);

console.log(numberSet);

// menghapus data di dalam set (tidak memakai index)
numberSet.delete(5);

console.log(numberSet);