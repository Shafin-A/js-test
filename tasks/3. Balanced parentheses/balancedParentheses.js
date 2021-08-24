export function areParenthesesBalanced(inputString) {

    // build new string with only parentheses
    const getOnlyParentheses = inputString => {
        let onlyParString = "";

        for (let i = 0; i < inputString.length; i++) {
            let curChar = inputString[i];
            if (curChar === '(' || curChar === ')') onlyParString += curChar;
        }

        return onlyParString;
    }

    const balancedParentheses = inputString => {
        let stack = []; // use a stack to check if parentheses are balanced

        for (let i = 0; i < inputString.length; i++) {
            let curChar = inputString[i];

            if (curChar === '(') stack.push(')'); // push the opposite parenthesis
            else if (stack.length === 0 || stack.pop() !== curChar) { // if ')' pop stack and check if they match
                return false;
            }
        }

        return stack.length === 0; // balanced if empty
    }

    const onlyParString = getOnlyParentheses(inputString);
    return balancedParentheses(onlyParString);
}
