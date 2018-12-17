function minimumDistances(arr) {
  var stack = {};
  for (var i = 0; i < arr.length; i++) {
    if (stack[arr[i]]) {
      stack[arr[i]].push(i);
    } else {
      stack[arr[i]] = [];
      stack[arr[i]].push(i);
    }
  }
  var finalArr = [];
  for (var key in stack) {
    if (stack[key].length > 1) {
      finalArr.push(stack[key].reduce((a, c) => (a > c ? a - c : c - a)));
    }
  }
  if (finalArr.length === 0) {
    return -1;
  } else {
    return Math.min.apply(null, finalArr);
  }
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
