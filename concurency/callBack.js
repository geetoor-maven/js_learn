
const orderCoffe = callback => {

    let coffe = null;
    console.log("Sedang membuat coffe... silahkan menunggu");

    setTimeout(() => {
        coffe = "Coffe sudah jadi";
        callback(coffe);
    }, 5000);

    return coffe;

}

orderCoffe(coffe => {
    console.log(coffe);
})