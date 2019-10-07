// https://app.codility.com/demo/results/trainingMNTPTA-MV6/
function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const bucket = new Set()
  for (const num of A) {
    bucket.add(num)
  }

  return bucket.size
}