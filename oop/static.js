
class Mail{

    static isValidPhone(phone){
        return typeof phone == 'number';
    }

}

Mail.isValidPhone(123)