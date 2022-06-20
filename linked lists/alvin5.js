// REVERSE LINKED LINK
class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}


const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

function reverse(head){
    let currentValue = head
    let prev = null
    let next = currentValue.next

    while(currentValue){
        
        currentValue.next = prev
        prev = currentValue
        currentValue = currentValue.next
    }
}