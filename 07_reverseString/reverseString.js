const reverseString = function(str) {
    let strArray = str.split("");
    let rtsArray = strArray.reverse();
    let rts = rtsArray.join("");
    return rts;
};

// Do not edit below this line
module.exports = reverseString;
