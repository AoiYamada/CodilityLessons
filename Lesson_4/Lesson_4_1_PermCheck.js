// https://app.codility.com/demo/results/trainingGGSX4M-BNE/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let check = 0
    for (let i = 0; i < A.length; i++) {
        check ^= A[i] ^ (i + 1)
    }

    return check > 0 ? 0 : 1
}
