// Stack: (LIFO) last in first out 比如：撤销，回上一页
var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.i = 0;
  return instance;
};

var stackMethods = {
  push(value) {
    this.storage[this.i] = value;
    this.i++;
  },
  pop() {
    if (this.i < 1) {
      return this.storage;
    }
    var last = this.storage[this.i - 1];
    delete this.storage[this.i - 1];
    this.i--;
    return last;
  },
  size() {
    return this.i;
  },
};
