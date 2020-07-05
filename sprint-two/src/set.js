var Set = function () {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  set.i = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function (item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
    this.i++;
  }
};

setPrototype.contains = function (item) {
  // if item found in storage, retur n true;
  // otherwise false;
  var arr = this._storage;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function (item) {
  var arr = this._storage;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      return arr;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// all 3: O(n)
