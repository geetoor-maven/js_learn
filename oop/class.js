
function Mail(){
    this.from = "Agus@gmail.com";
}

Mail.prototype.sendMessage = function(msg, to){
    console.log(`Hello this message to ${to} and i ask you ${msg} from ${this.from}`)
}

const mail1 = new Mail();
mail1.sendMessage("example", "slstiya@gmail.com");