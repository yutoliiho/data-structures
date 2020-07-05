// obj = {
//   Node => value
//   edge => neighbors
// }

// pseudoclassical style
// Instantiatse a new graph
// . value: 5,  edge: [1 ,2, 3, 4, 8]
// . value = 8, egfe: [5]

// {0: [1]}
// storage = {} node = 0: [1], edge = [blabla]

var Graph = function () {
  this.storage = {};
  this.i = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.storage[this.i] = [node];
  this.i++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (var key in this.storage) {
    var nodes = this.storage[key];
    for (var i = 0; i <= nodes.length; i++) {
      if (nodes[i] === node) {
        return true;
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  // {0: [1]}
  for (var key in this.storage) {
    var nodes = this.storage[key];
    for (var i = 0; i <= nodes.length; i++) {
      if (nodes[i] === node) {
        nodes.splice(i, 1);
        return nodes;
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  for (var key in this.storage) {
    var nodes = this.storage[key];
    if (nodes[0] === fromNode && nodes.includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  for (var key in this.storage) {
    var nodes = this.storage[key];
    for (var i = 0; i <= nodes.length; i++) {
      if (nodes[i] === fromNode && !nodes.includes(toNode)) {
        nodes.push(toNode);
      }
    }
  }
  for (var key in this.storage) {
    var nodes = this.storage[key];
    for (var i = 0; i <= nodes.length; i++) {
      if (nodes[i] === toNode && !nodes.includes(fromNode)) {
        nodes.push(fromNode);
      }
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (var key in this.storage) {
    var nodes = this.storage[key];
    if (nodes[0] === fromNode) {
      nodes.splice(nodes.indexOf(toNode), 1);
    }
    if (nodes[0] === toNode) {
      nodes.splice(nodes.indexOf(fromNode), 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var key in this.storage) {
    var nodes = this.storage[key];
    nodes.map((el) => cb(el));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// O(1) ==> O(n)
