const T9predictive = require("./T9predictive.js");

// case 1 : 23 => ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
test("T9predictive for number 23", () => {
    const answer = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(T9predictive(23)).toEqual(answer);
});

// case 2: 4663 => ['gone', 'good', 'goof', 'home', 'hone', 'hood', 'hoof']
test("T9predictive for number 4663", () => {
    const answer = ['gone', 'good', 'goof', 'home', 'hone', 'hood', 'hoof'];
    expect(T9predictive(4663)).toEqual(answer);
});






