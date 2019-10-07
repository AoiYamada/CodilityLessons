// https://app.codility.com/demo/results/training3WN9R4-NG7/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min_start = 0
  let min_avg = Number.MAX_SAFE_INTEGER

  const range = A.length - 1
  for (let i = 0; i < range; i++) {
    let two_sum = A[i] + A[i + 1]
    let avg = two_sum / 2

    if (i + 2 < A.length) {
      let three_sum = two_sum + A[i + 2]
      let three_avg = three_sum / 3
      if (three_avg < avg) avg = three_avg
    }

    if (avg < min_avg) {
      min_avg = avg
      min_start = i
    }
  }

  return min_start
}