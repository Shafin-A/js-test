export function isPalindrome(inputString) {
    // goes through string with two pointers at start and end, and compares characters
    // assumes isPalindrome() is case sensitive, i.e. Racecar is not a palindrome but racecar or RacecaR is
    // if case insensitive, we would use .toLowerCase()
    for (let i = 0; i < inputString.length / 2; i++) {
        let j = inputString.length - i - 1;
        if (inputString[i] !== inputString[j]) {
            return false;
        }
    }
    return true;
}