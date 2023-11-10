var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();
flagUser = true;
flagPwd = true;
//
// Get two properties from the user: username and email
//

script();

async function getUser(){

    prompt._get(['username'], function (err, result) {
        if (result.username == "Admin") {
            falgUser = false;
            while (flagPwd) {
                getPwd();
            }
        } else if (result.username == "") {
            console.log("Canceled");
            flagUser = false;
        } else {
            console.log("I don't know you")

        }
    })
}

async function getPwd(){
    await prompt._get(['pwd'], function (err, result2) {
        if (result2.pwd === "TheMaster") {
            console.log("Welcome");
            flagPwd = false;
        } else if (result2.pwd === "") {
            console.log("Canceled");
            flagPwd = false;
        } else {
            console.log("Wrong password")
        }
    })
}

async function script(){
    do {
        await getUser();
    }
    while (flagUser)
}
//
// Log the results.
//


