// https://app.codility.com/demo/results/trainingMNTPTA-MV6/
function solution(A) {
  const bucket = new Set()
  for (const num of A) {
    bucket.add(num)
  }

  return bucket.size
}
