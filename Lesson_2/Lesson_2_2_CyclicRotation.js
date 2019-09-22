// https://app.codility.com/demo/results/training4YZ4F7-EAS/
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    K = K % A.length
    return [...A.slice(-K), ...A.slice(0, -K)]
}