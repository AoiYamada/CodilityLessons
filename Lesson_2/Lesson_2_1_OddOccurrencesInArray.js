// https://app.codility.com/demo/results/training25G4QG-M32/
function solution(A) {
  let ans = 0
  for (const num of A) {
    ans ^= num
  }
  return ans
}
