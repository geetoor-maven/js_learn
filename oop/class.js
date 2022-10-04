
function Mail(){
    this.from = "Agus@gmail.com";
}

Mail.prototype.sendMessage = function(msg, to){
    console.log(`Hello this message to ${to} and i ask you ${msg} from ${this.from}`)
    console.log("And this feature A")
}

const mail1 = new Mail();
mail1.sendMessage("example", "slstiya@gmail.com");