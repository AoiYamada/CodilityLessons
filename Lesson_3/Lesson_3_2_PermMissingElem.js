// https://app.codility.com/demo/results/trainingT2TX6K-DP9/
function solution(A) {
  let ans = A.length + 1
  for (let i = 0; i < A.length; i++) {
    ans ^= A[i] ^ (i + 1)
  }

  return ans
}
