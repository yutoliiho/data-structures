var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// SAME AS: obj[key] = value  ==>  O(1)
HashTable.prototype.insert = function (k, v) {
  // arguments: str, max_limit
  // console.log(k, v);
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage[index]) {
    this._storage[index] = [];
  }
  this._storage[index].push([k, v]);
  // var current_limit = this._limit;
  // this._limit = current_limit * 2;
};

// SAME AS: obj[key] ==> O(n)
HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) {
    for (var i = 0; i < this._storage[index].length; i++) {
      var overRide;
      if (this._storage[index][i][0] === k) {
        overRide = this._storage[index][i][1];
      }
    }
    return overRide;
  }
  return undefined;
};

// SAME AS: delete obj[key] ===> O(1)
HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
