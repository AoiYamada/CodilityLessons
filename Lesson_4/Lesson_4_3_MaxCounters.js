// https://app.codility.com/demo/results/trainingBRM7XY-WHX/
function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const counters = new Array(N).fill(0)
    let max = 0
    let trigger = max

    for (let operation of A) {
        operation -= 1
        if (operation == N)
            trigger = max
        else {
            const current = counters[operation] = Math.max(counters[operation], trigger) + 1
            if (current > max) max += 1
        }
    }

    return counters.map(v => Math.max(v, trigger))
}