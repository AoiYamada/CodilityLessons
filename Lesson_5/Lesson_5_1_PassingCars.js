// https://app.codility.com/demo/results/trainingG6DDRK-3CV/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ones = A.reduce((a, b) => a + b)
    let count = 0
    for (const direction of A) {
        if (direction) {
            ones--
        } else {
            count += ones
            if (count > 1000000000) return -1
        }
    }

    return count
}