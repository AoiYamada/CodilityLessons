// https://app.codility.com/demo/results/training25G4QG-M32/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ans = 0
    for (const num of A) {
        ans ^= num
    }
    return ans
}