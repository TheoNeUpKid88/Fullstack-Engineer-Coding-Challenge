const async = require('async');
const fs = require('fs');

function hasWhiteSpace(s) {
    /**
     * Author: Ramon Jr. Yniguez
     * Purpose: Determine if param contains white-space
     */
    return /\s/g.test(s);
}

const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

let shiftty = (str, callback) => {
    /**
     * Author: Ramon Jr. Yniguez
     * Purpose: shift cypher creation: handel multiple characters
     * Date: Apr 16, 2020
     */
    if (!str) {
        callback({ message: `invalid request ${char}`, statu: 500 });
    } else {
        let re = new RegExp('/[!@#$%^&*(),_+-=.?":`~{}|<>]/g');
        if (re.test(str)) {
            callback({ message: `invalid character identified ${char}`, statu: 500 });
        }
    }
    let result = [];
    for (letters in str) {
        if(hasWhiteSpace(letters)){
            result.push(letters)
        }
        result.push(encrypt(letters));
    }
    if(result.length <= 0){
        callback({message: 'Internal Server Error', status: 500});
    }else{
        writeToFile(result.join());        
        callback(null, { "EncodedMessage": result.join()});
    }
}

let encrypt = (char, shift, callback) => {
    /**
     * Author: Ramon Jr. Yniguez
     * Purpose: shift cypher creation
     * Date: Apr 16, 2020
     */
    // added for support concurrent requests, requiring previous step to be completed
    async.waterfall([
        function (callback) {
            if (!char || !shift) {
                callback({ message: `invalid character identified ${char}`, statu: 500 });
            } else {
                callback(null, { char: char, shift: shift })
            }
        },
        function (data, callback) {
            if (alphabet.includes(char.toUpperCase())) {
                const position = alphabet.indexOf(data.char.toUpperCase());
                const newPosition = (position + data.shift) % 26;
                return alphabet[newPosition]
            } else {
                callback({ message: `invalid character identified ${data.char}`, statu: 500 });
            }
        }
    ], callback);
}

let writeToFile = (data) => {
    /**
     * Author: Ramon Jr. Yniguez
     * Purpose: shift cypher creation: write shift cyper to file
     * Date: Apr 16, 2020
     */
    if (data) {
        fs.appendFile('shiftcyphermessage.txt', data, function (error) {
            if (err) callback({ message: `Unexpected error Occurred ${error}`, statu: 500 });
            console.log('Saved!');
        });
    }
}


module.exports.shiftty = shiftty;
module.exports.writeToFile = writeToFile;