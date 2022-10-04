
class Mail{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }

}

class WhatsApp extends Mail{
    constructor(author){
        super(author);
        this.userName = "Geetoor";
        this.isBusinessAccount = false;
    }

    myProfile() {
        return `my name ${this.userName}, is ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp();
console.log(wa1.myProfile());
wa1.sendMessage("example", "Eko Khannedy");