var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.i = 0;
  this.storage = {};
};

Stack.prototype.push = function (val) {
  this.storage[this.i] = val;
  this.i++;
};

Stack.prototype.pop = function () {
  if (this.i < 1) {
    return this.storage;
  }

  var first = this.storage[this.i - 1];
  delete this.storage[this.i - 1];
  this.i--;
  return first;
};

Stack.prototype.size = function () {
  return this.i;
};
