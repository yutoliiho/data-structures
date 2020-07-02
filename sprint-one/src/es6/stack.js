class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, i) {
    this.storage = {};
    this.i = 0;
  }
  push(val) {
    this.storage[this.i] = val;
    this.i++;
  }
  pop() {
    if (this.i < 1) {
      return this.storage;
    }

    var first = this.storage[this.i - 1];
    delete this.storage[this.i - 1];
    this.i--;
    return first;
  }
  size() {
    return this.i;
  }
}
