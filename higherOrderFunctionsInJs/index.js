function stateIs(n) {
  return (s) => n === s;
}

function prependOthers(succStates, otherStates) {
  return [...otherStates, ...succStates];
}

function concatOthers(succStates, otherStates) {
  return [...succStates, ...otherStates];
}

function binaryTree(s) {
  return [s * 2, s*2 + 1];
}

function finiteBinaryTree(limit) {
  return (s) => binaryTree(s).filter(item => item <= limit);
}

// Returns the state if its found in the tree. return -1 if the state is not found
function treeSearch(states, goalFunc, successors, combiner) {
  console.log('treeSearch', states);
  if (states.length === 0) {
    return -1;
  }

  let first = states[0];
  if (goalFunc(first)) {
    return first;
  } else {
    states.shift()
    return treeSearch(combiner(successors(first), states), goalFunc, successors, combiner);
  }
}

function bfsTreeSearch(states, goal, successors) {
  return treeSearch(states, goal, successors, prependOthers)
}

function dfsTreeSearch(states, goal, successors) {
  return treeSearch(states, goal, successors, concatOthers)
}

// let found = bfsTreeSearch([1], stateIs(31), finiteBinaryTree(31));

let found = dfsTreeSearch([1], stateIs(31), finiteBinaryTree(31));

console.log('***Found***', found);