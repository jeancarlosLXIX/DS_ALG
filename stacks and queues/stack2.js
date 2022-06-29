class Node {
    constructor(value, next = null){
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor(){
      this.stack = [];
    }
    peek() {
        //See 
        return this.stack[this.stack.length-1]
    }
    push(value){
       this.stack.push(new Node(value))
        return this
    }
    pop(){
      if (this.stack.length) {
        this.stack.pop()
        
      } 
    }
    isEmpty(){
      if(this.stack.length) return "Has values"

      return "Does not have values"
    }
  }
  
  const myStack = new Stack(); // Last in first out = LIFO

  console.log(myStack)
  myStack.push("google")
  myStack.push("Udemy")
  myStack.push("Discord")
  console.log(myStack)
  
  
  
  
  //Discord
  //Udemy
  //google