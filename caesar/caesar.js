const caesar = function(text, a) {
    let unicodeArray = [];
    let textSplitArray = text.split("");
    let unicodeCipheredArray = [];
    let finalMsgArray = [];
    console.log(textSplitArray)
    for (let i = 0; i < textSplitArray.length; i++) {
        let uni = textSplitArray[i];
        unicodeArray.push(uni.charCodeAt(0));
        console.log();
    }
    for (let j = 0; j < unicodeArray.length; j++) {
        if (unicodeArray[j] > 64 && unicodeArray[j] < 123) {
            unicodeCipheredArray.push(unicodeArray[j] + a);  
        }else {
            unicodeCipheredArray.push(unicodeArray[j]);
            console.log();
        }
    }
    for (let h = 0; h < unicodeCipheredArray.length; h++) {
        let uniCiphered = unicodeCipheredArray[h];
        finalMsgArray.push(String.fromCharCode(uniCiphered));
        console.log(finalMsgArray)
    }
    let finalMsg = finalMsgArray.join("");
    return finalMsg;
}
