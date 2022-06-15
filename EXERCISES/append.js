class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      this.head.next = {value: value, next: null}
      this.length++
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
//   myLinkedList.append(16);

console.log(myLinkedList)