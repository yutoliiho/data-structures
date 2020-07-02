// Queues: (FIFO) first in first out 比如：排队APP，Uber
// .enqueue() 0(1) ==> same as push() but push to the first one
// .dequeue() 0(1) ==> same as pop() but pop the first one
// .peek() 0(1) ==> tell us what's the first peson in the list

var Queue = function () {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function () {
    if (count < 1) {
      return count;
    }
    var first = storage[0];
    for (var i = 1; i < count; i++) {
      storage[i - 1] = storage[i];
    }

    delete storage[count - 1];
    count--;
    return first;
  };

  someInstance.size = function () {
    // var keys = Object.keys(storage);
    // return keys.length;
    return count;
  };
  return someInstance;
};
