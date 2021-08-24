export function getFibonacciUntil(n) {
    /*
    fib(5) - arr = [0, 1, 1, 2, 3], push(arr[4]: 3 + arr[3]: 2, return [0, 1, 1, 2, 3, 5]
        fib(4) - arr = [0, 1, 1, 2], push(arr[3]: 2 + arr[2]: 1, return arr = [0, 1, 1, 2, 3]
            fib(3) - arr = [0, 1, 1], push(arr[2]: 1 + arr[1]: 1, return arr = [0, 1, 1, 2]
                fib(2) - arr = [0,1], push(arr[1]: 1 + arr[0]: 0, return arr = [0, 1, 1]
                    fib(1) - return [0, 1]
     */

    const fib = n => {
        if (n === 0) return [0];
        if (n === 1) return [0, 1];

        const arr = fib(n - 1);
        arr.push(arr[n - 1] + arr[n - 2]);

        return arr;
    }

    return fib(n-1);
}
