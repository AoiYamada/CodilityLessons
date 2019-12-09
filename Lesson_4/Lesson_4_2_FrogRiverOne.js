// https://app.codility.com/demo/results/trainingKFQUSM-5CF/
function solution(X, A) {
  let leaves = new Set()
  for (let i = 0; i < A.length; i++) {
    leaves.add(A[i])
    if (leaves.size >= X) return i
  }

  return -1
}
