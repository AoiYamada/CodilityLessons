// https://app.codility.com/demo/results/trainingRQQVV3-DK3/
function solution(N) {
  const lengths = N
    .toString(2)
    .replace(/0+$/, "")
    .split("1")
    .map(zeros => zeros.length)

  return Math.max(...lengths)
}
