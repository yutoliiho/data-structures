// refactor Graph()
/** Graph = {
 * actualIndex--> 0 : [nodeVal, edges...]
 * NodeVal--> 2 : [edges...]
 * NodeVal--> 5 : [edges...]
 * NodeVal--> 3 : [edges...]
 *  }

 */
var Graph = function () {
  this.storage = {};
  // this.i = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  if (this.storage[node] === undefined) {
    this.storage[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.storage[node] !== undefined) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  var edges = this.storage[node];
  for (var i = 0; i < edges.length; i++) {
    this.storage[edges[i]].splice(this.storage[edges[i]].indexOf(node), 1);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.storage[fromNode].includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.storage[fromNode] = [toNode];
  this.storage[toNode] = [fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1);
  this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1);

};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  console.log(this.storage);
  for (var node in this.storage) {
    cb(parseInt(node));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// O(1) ==> O(n)
