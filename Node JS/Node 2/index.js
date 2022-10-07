const r = require("r");

r.readFile("file1.txt", (error, info) => {

    if (!error) {
        console.log('Información: ' + info);
    }
    else {
        console.log(error);
    }

});