// https://app.codility.com/demo/results/trainingRQQVV3-DK3/
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const lengths = N
        .toString(2)
        .replace(/0+$/, "")
        .split("1")
        .map(zeros => zeros.length)

    return Math.max(...lengths)
}
