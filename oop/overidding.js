
class Mail{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContacts(){
        return this._contacts;
    }
}

class WhatsApp extends Mail{
    constructor(userName, isBusinessAccount, phoneNumber){
        super(phoneNumber);
        this.userName = userName;
        this.isBusinessAccount = isBusinessAccount;
    }

    sendMessage(msg, to){
        super.sendMessage(msg, to);
        console.log("Send By Whatsapp")
    }
}

const wa1 = new WhatsApp("Geetoor", false, "62");
wa1.sendMessage("Testing ", "Shegi");
