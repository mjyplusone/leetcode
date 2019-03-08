/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((num1, num2) => num2 - num1);
    
    var res = [];
    for (let i = 0; i < deck.length - 1; i++) {
        res.unshift(deck[i]);
        let val = res.pop();
        res.unshift(val);
    }
    res.unshift(deck[deck.length - 1]);
    
    return res;
};