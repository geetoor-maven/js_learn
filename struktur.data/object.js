
const user = {
    firstName: "Agus",
    lastName: "Kurniawan",
    age: 23,
    isMerried: false,
    "home world": "Indonesia",
}

console.log(`-- Hello My Name is ${user.firstName} ${user.lastName}`);
console.log(`And i come from ${user["home world"]}`);

user.isMerried = true;
user["date"] = "23/12/2024";


console.log(user);

delete user["home world"];

console.log(user);