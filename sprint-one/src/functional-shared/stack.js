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

// var Stack = function () {
//   //   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   //   // but try not not reference your old code in writing the new style.
//   //   var test  {
//   //     count: 0,
//   //     storage: {}
//   //   }
//   //   return _.extend(test, stackMethods)

// };

// var stackMethods = {
//   push(val) {

//   }
//   pop() {

//   }
//   size () {
//     return this.i;
//   }
// };

// // stackMethods.push = function (value) {
// //   // return;
// // };

// // stackMethods.pop = function () {
// //   // delete
// // };

// // stackMethods.size = function () {
// //   // return;
// // };
