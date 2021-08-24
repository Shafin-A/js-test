export function Reduce(array, reducer, initialValue) {
    if (array.length === 0) { // base case
        return initialValue;
    }
    else {
        const [head, ...rest] = array; // split array
        const acc = reducer(initialValue, head); // apply reducer

        return Reduce(rest, reducer, acc); // recurse
    }
}
