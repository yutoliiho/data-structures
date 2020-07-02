// // Stack: (LIFO) last in first out 比如：撤销，回上一页

var Stack = function () {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function () {
    if (count < 1) {
      return storage;
    }
    var last = storage[count - 1];
    delete storage[count - 1];
    count--;
    return last;
  };

  someInstance.size = function () {
    return count;
  };

  return someInstance;
};
