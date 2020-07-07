// [Node({head: val, next; }), Node(), Node(next -> null) ]
/**
 * head: {val: bla
 *        next: {
 *          val: bla;
 *        }}
 *
 */

var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function () {
    var previousHead = this.head.value;
    if (this.head === null) {
      return null;
    }
    this.head = this.head.next;
    return previousHead;
  };

  list.contains = function (target) {
    while (this.head !== null) {
      if (this.head.value === target) {
        return true;
      }
      this.head = this.head.next;
    }
    return false;
  };
  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// O(n)

// LinkedList Example:

//   const list = {
//     head: {
//         value: 12
//         next: {
//             value: 99
//             next: {
//                 value: 37
//                 next: null
//             }
//         }
//     }
// };


//   const list = {
//     head: {
//         value: 12
//         next: {
//             value: 99
//             next: {
//                 value: 37
//                 next: null
//             }
//         }
//     }
//      tail: myNodeObj // head.next.next
// };
