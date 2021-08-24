export function encryptCaesar(inputString, key) {
    if (key < 0) { // negative key wrap
        return encryptCaesar(inputString, key + 26);
    }

    let result = "";

    for (let i = 0; i < inputString.length; i++) {
        let curCharCode = inputString.charCodeAt(i);
        let shiftedChar = "";

        // uppercase letters
        if (curCharCode >= 65 && curCharCode <= 90) {
            shiftedChar = String.fromCharCode(((curCharCode - 65 + key) % 26) + 65); // handles wrapping with %
        }
        // lowercase letters
        else if (curCharCode >= 97 && curCharCode <= 122) {
            shiftedChar = String.fromCharCode(((curCharCode - 97 + key) % 26) + 97);
        }

        result += shiftedChar;
    }

    return result;
}
