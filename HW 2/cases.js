function factorial(x) {
  if (x == 1) return 1;
  return x * factorial(x - 1);
}

function permutation(n, r) {
  return factorial(n) / factorial(n - r);
}

function multiPermutation(n, r) {
  return n ** r;
}

function combination(n, r) {
  return factorial(n) / (factorial(n - r) * factorial(r));
}

function multiCombination(n, r) {
  return factorial(n + r - 1) / (factorial(n - 1) * factorial(r));
}

module.exports = {
  permutation,
  multiPermutation,
  combination,
  multiCombination,
};
