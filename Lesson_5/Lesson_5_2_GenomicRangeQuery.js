// 62% wrong ocurrence order :(
// https://app.codility.com/demo/results/trainingFD4FGV-XE6/

// 100%
// https://app.codility.com/demo/results/trainingN7Q97H-94G/
const impact_factor_map = new Map([
  ["A", 1],
  ["C", 2],
  ["G", 3],
  ["T", 4],
])

function solution(S, P, Q) {
  const M = P.length
  const ocurrences = new Map([
    ["A", 0],
    ["C", 0],
    ["G", 0],
    ["T", 0],
  ])
  const zeros = new Map(ocurrences)
  const pre_sums = []
  for (const nucleotide of S) {
    ocurrences.set(nucleotide, ocurrences.get(nucleotide) + 1)
    pre_sums.push(new Map(ocurrences))
  }

  const answers = []
  for (let i = 0; i < M; i++) {
    const previous_ocurrence = pre_sums[P[i] - 1] || zeros
    const current_occrrence = pre_sums[Q[i]]
    for (const nucleotide of ocurrences.keys()) {
      if (current_occrrence.get(nucleotide) > previous_ocurrence.get(nucleotide)) {
        answers.push(impact_factor_map.get(nucleotide))
        break
      }
    }
  }

  return answers
}
