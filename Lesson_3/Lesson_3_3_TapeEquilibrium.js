// https://app.codility.com/demo/results/training5QQP8V-Y4M/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum_1 = 0
    let sum_2 = A.reduce((a, b) => a + b)

    const loop = A.length - 1
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < loop; i++) {
        sum_1 += A[i]
        sum_2 -= A[i]
        const temp = Math.abs(sum_1 - sum_2)
        if (temp < min) min = temp
    }

    return min
}