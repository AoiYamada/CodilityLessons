// https://app.codility.com/demo/results/trainingQ2A7S9-9RT/
function solution(A, B, K) {
  const first_multiple = Math.ceil(A / K)
  const last_multiple = Math.floor(B / K)

  return last_multiple - first_multiple + 1
}
