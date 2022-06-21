class LinkedList {
  constructor(value) {
    this.head = {
      prev: null,
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      prev: null,
      value: value,
      next: null
    }
    newNode.prev = this.tail // before changing to the new tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      prev: null,
      value: value,
      next: null
    }

    newNode.next = this.head;
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      prev: null,
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader
    newNode.next = follower;
    newNode.prev = newNode
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index){
    if (index == 0){
      this.head = this.head.next // JS is garbage collected so the first element will delet itself
      return
    }

    const leader = this.traverseToIndex(index-1) // take the previous to reference later
    const unwantedNode = leader.next // take the node we're bout to remove
    leader.next = unwantedNode.next // make the previous point to the unwanted next

    this.length--
  }
}

let ll = new LinkedList(10);
ll.append(5);
ll.append(16);
ll.prepend(1);
ll.insert(2,99)
console.log(ll);
visualLinkedList(ll.printList())



function visualLinkedList(arr){
  let listNode = ''
  arr.forEach(element => {
    listNode += element + " --> "
  });
  console.log(listNode)
}