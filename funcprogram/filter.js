
const student = [
    {
        name: 'Harry',
        score: 80
    },
    {
        name: "Agus",
        score: 90
    },
    {
        name: "Andra",
        score: 40
    },
    {
        name: "Obo",
        score: 70
    }
];

const data = student.filter((students) => students.score >= 80);

console.log(data);