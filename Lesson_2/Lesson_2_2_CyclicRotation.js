// https://app.codility.com/demo/results/training4YZ4F7-EAS/
function solution(A, K) {
  K = K % A.length
  return [...A.slice(-K), ...A.slice(0, -K)]
}
