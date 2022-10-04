function hitung(value) {
        var foo = 10;
        foo += value;
        console.log(foo)
        setTimeout(function() {
        console.log("Hello World");
        }, 1000);
        return foo;
    }
hitung(26);
    