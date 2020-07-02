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
  // this.storage[this.i];
};

Queue.prototype.size = function () {
  return this.i;
};
