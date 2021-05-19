const reverseString = function(str) {
    let reverseStringArray = [""];
    for (let j = str.length; j >= 0; j--) {
        reverseStringArray.push(str[j]);
    }
    let finalStr = reverseStringArray.join("");
    return finalStr;
}

module.exports = reverseString