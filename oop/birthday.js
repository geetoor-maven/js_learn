
const myAge = birthDay=> {

    const birtDay = new Date(birthDay);
    const today = Date.now();

    const diff_ms = today - birtDay.getTime();
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970;
};

console.log(myAge('1999-08-09'));