// https://app.codility.com/demo/results/training2FKHST-PDZ/
function solution(A) {
  var data = A.map((r, x) => ({
    upper_bound: x + r,
    lower_bound: x - r,
    center: x,
  }))
  data.sort((a, b) => a.lower_bound - b.lower_bound)

  const intersect = data.reduce((overlap, datum, x) => overlap + lowerBoundBinarySearch(datum.upper_bound, x), 0)

  return intersect > 10000000 ? -1 : intersect

  // https://medium.com/@CalvinChankf/how-to-deal-with-lower-upper-bound-binary-search-b9ce744673df
  function lowerBoundBinarySearch(target, start, end) {
    let min = start || 0
    let max = end || data.length - 1
    let dead_loop_count = data.length
    while (min < max && dead_loop_count >= 0) {
      dead_loop_count--

      let mean = Math.ceil((max + min) / 2)
      if (target >= data[mean].lower_bound) {
        min = mean

      } else {
        max = mean - 1

      }
    }
    return min - start
  }
}
