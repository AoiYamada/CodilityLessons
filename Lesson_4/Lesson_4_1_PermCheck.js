// https://app.codility.com/demo/results/trainingGGSX4M-BNE/
function solution(A) {
  let check = 0
  for (let i = 0; i < A.length; i++) {
    check ^= A[i] ^ (i + 1)
  }

  return check > 0 ? 0 : 1
}
