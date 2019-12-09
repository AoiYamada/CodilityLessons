// https://app.codility.com/demo/results/trainingNZYQN2-MPV/
function solution(A) {
  A.sort((a, b) => b - a)
  for (let i = 0; i < A.length - 2 && A[i] > 0; i++) {
    if (A[i + 2] > A[i] - A[i + 1]) return 1
  }

  return 0
}
