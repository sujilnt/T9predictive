const phoneNumbertoAlphabets = {
    0: '0', 1: '1', 2: 'ABC', 3: 'DEF', 4: 'GHI',
    5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ'
};

const T9predictive = (text) => {
    let result = [];

    let generateText = (result, phoneNumbertoAlphabetsArray) => {
        for (let j = 0, len = phoneNumbertoAlphabetsArray.length; j < len; j++) {
            let firstchar = phoneNumbertoAlphabetsArray[j];
            console.log("first char", firstchar);
            if (result.length < 3) {
                result.push(firstchar);
            } else {
                console.log("else called", result);
                for (let k = 0; k < result.length; k++) {
                    let resultchar = result[k];
                    result.push(resultchar.concat(firstchar));
                }

            }

        }
    }

    for (let index = 0, len = text.length; index < len; index++) {
        let character = phoneNumbertoAlphabets[text[index]]; // "ABC"
        generateText(result, character);
        console.log("inside loop", character);
    };

    return result;
}
module.exports = T9predictive;

T9predictive("23")