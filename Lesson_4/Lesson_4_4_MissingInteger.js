// https://app.codility.com/demo/results/trainingWYD244-W77/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const counters = []
    for (const num of A) {
        if (num > 0) {
            counters[num - 1] = 1
        }
    }
    
    for (let i = 0; i < counters.length; i++) {
        if (!counters[i]) return i + 1
    }
    
    return counters.length + 1
}