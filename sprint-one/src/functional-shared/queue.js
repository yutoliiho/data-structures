// Queues: (FIFO) first in first out 比如：排队APP，Uber
// .enqueue() 0(1) ==> same as push() but push to the first one
// .dequeue() 0(1) ==> same as pop() but pop the first one
// .peek() 0(1) ==> tell us what's the first peson in the list

var Queue = function () {
  //   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  //   // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.i = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var queueMethods = {
  enqueue(val) {
    this.storage[this.i] = val;
    this.i++;
  },
  dequeue() {
    // some code
  },
  size() {
    return this.i;
  },
};
