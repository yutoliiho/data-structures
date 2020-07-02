var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.i = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.i] = val;
  this.i++;
};

Queue.prototype.dequeue = function () {
  if (this.i < 1) {
    return this.i;
  }
  var first = this.storage[0];
  for (var i = 1; i < this.i; i++) {
    this.storage[i - 1] = this.storage[i];
  }

  delete this.storage[this.i - 1];
  this.i--;
  return first;
};

Queue.prototype.size = function () {
  return this.i;
};
