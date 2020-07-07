var Tree = function (value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target, root) {
  var root = root || this;
  if (root.value === target) {
    return true; // base-case
  }
  for (var i = 0; i < root.children.length; i++) {
    if (this.contains(target, root.children[i])) {
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// O(n)

//  original:
// ====== ====== ====== ====== ====== ====== ====== ======
// var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;

//   // your code here
//   newTree.children = null;  // fix me

//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value) {
// };

// treeMethods.contains = function(target) {
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
// ====== ====== ====== ====== ====== ====== ====== ======
