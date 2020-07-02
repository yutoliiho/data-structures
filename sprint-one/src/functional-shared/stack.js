var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.i = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push(val) {
    this.storage[this.i] = val;
    this.i++;
  },
  pop() {
    if (this.i < 1) {
      return this.storage;
    }

    var first = this.storage[this.i - 1];
    delete this.storage[this.i - 1];
    this.i--;
    return first;
  },
  size() {
    return this.i;
  },
};
