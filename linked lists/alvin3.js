//FIND
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



function findMe(head,target){
    let current = head
    while(current !== null){        
        if (current.value === target){
            console.log(`Value ${target} found`);
            return true
        }
        current = current.next
    }
    return false
}

function findMe_r(head,target){
    if (head === null)  return false
    if (head.value === target) return true
    return findMe_r(head.next,target)
}

console.log(findMe(a,'F'), " <-- Solution")
console.log(findMe_r(a,'A'), " <-- Recursive solution")