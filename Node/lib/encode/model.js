const async = require("async")
const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];
let shiftty = (str) =>{
    /**
     * Author: Ramon Jr. Yniguez
     * Purpose: shift cypher creation: handel multiple characters
     * Date: Apr 16, 2020
     */
    if(!str){
        
    }
    let result = [];
    for(letters in str){
        result.push(encrypt(letters));
    }
    return {"EncodedMessage": result};
}

let encrypt = (char, shift, callback) => {
    /**
     * Author: Ramon Jr. Yniguez
     * Purpose: shift cypher creation
     * Date: Apr 16, 2020
     */
    async.waterfall([
        function(callback){
            if(!char || !shift){
                callback({message: `invalid character identified ${char}`, statu: 500});
            }else{
                callback(null, {char: char, shift: shift})
            }
        },
        function(data, callback){
            if (alphabet.includes(char.toUpperCase())) {
                const position = alphabet.indexOf(data.char.toUpperCase());
                const newPosition = (position + data.shift) % 26;
                return alphabet[newPosition]
            }else { 
                callback({message: `invalid character identified ${data.char}`, statu: 500});
            }
        }
    ], callback);
}



module.exports.encrypt = encrypt;