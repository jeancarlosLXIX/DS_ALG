//Get value
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

function getMe(head,idx){
    let currentValue = head
    count = 0

    while (currentValue !== null) {
        if (count === idx) return currentValue.value
        
        count++
        currentValue = currentValue.next
    }

    return false
}

function getMe_r(head,idx){
   if (head === null) return null
   if (idx === 0) return head.value
   return getMe_r(head.next,idx--)   
}

console.log(getMe(a,0),"<-- normal solution");
console.log(getMe(a,2),"<-- recursive solution");