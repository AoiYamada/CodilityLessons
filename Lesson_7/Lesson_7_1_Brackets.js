// https://app.codility.com/demo/results/trainingWJB3JA-FBT/
const stack = []
const pair_map = {
  "(": ")",
  "[": "]",
  "{": "}",
}

function validation(char) {
  const last = stack.pop()
  if (!last || last != char) return 0
  return 1
}

function solution(S) {
  for (const char of S) {
    switch (char) {
      case "(":
      case "[":
      case "{":
        stack.push(pair_map[char])
        break
      case ")":
      case "]":
      case "}":
        if (validation(char) == 0) return 0
        break
    }
  }
  return ~~!Math.sign(stack.length)
}