class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, i) {
    this.storage = {};
    this.i = i;
  }
  push(val) {
    this.storage[this.i] = val;
    this.i++;
  }
  pop() {
    // var last = this.storage[this.i - 1];
    // delete this.storage[this.i - 1];
    // this.i--;
    // return last;
  }
  size() {
    return this.i;
  }
}
