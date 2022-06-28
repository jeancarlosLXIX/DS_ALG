class Node {
    constructor(value, next = null){
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        //See 
        return this.top
    }
    push(value){
        const newNode = new Node(value)

        if (!this.length) {
          this.top = newNode
          this.bottom = newNode
        } else{
          const holding_top = this.top
          this.top = newNode
          this.top.next = holding_top
        }

        this.length++
        return this
    }
    pop(){
      if (this.top) {
        this.top = this.top.next
      } else{
        return
      }

      if(this.top === null) this.bottom = null
      this.length--
    }
    isEmpty(){
      if(this.length) return "Has values"

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