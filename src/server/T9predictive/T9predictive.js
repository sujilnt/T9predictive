const phoneNumbertoAlphabets = {
    0: '0', 1: '1', 2: 'ABC', 3: 'DEF', 4: 'GHI',
    5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ'
};

const T9predictive = (text) => {
    let result = [];
    let addText = (result, listofcharacters) => {
        let generatedTexts = [];
        for (let i = 0; i < listofcharacters.length; i++) {
            let character = listofcharacters[i].toLowerCase();
            if (result.length === 0) {
                generatedTexts.push(character);  // [A,B,C]
            } else {
                for (let j = 0; j < result.length; j++) {
                    generatedTexts.push(result[j].toLowerCase().concat(character));
                }
            }
        }
        return generatedTexts;
    };
    for (let index = 0, len = text.length; index < len; index++) {
        let character = phoneNumbertoAlphabets[text[index]]; // "ABC"
        result = addText(result, character);
    };
    return result;
}
module.exports = T9predictive;
