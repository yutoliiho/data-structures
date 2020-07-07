// Object.create(proto, [propertiesObject])
// Queues: (FIFO) first in first out 比如：排队APP，Uber

var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // var someInstance = Object.create(queueMethods);
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.i = 0;
  return someInstance;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.i] = value;
    this.i++;
  },
  dequeue() {
    if (this.i < 1) {
      return this.storage;
    }

    var first = this.storage[0];
    for (var i = 1; i < this.i; i++) {
      this.storage[i - 1] = this.storage[i];
    }

    delete this.storage[this.i - 1];
    this.i--;
    return first;
  },
  size() {
    return this.i;
  }
};
