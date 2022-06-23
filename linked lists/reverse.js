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


console.log(reverse_r(a))
// https://youtu.be/Hj_rA0dhr2I 59:00
function reverse_r(head, prev = null){
    if (head === null) return prev
    const next = head.next
    head.next = prev
    return reverse_r(next, head)
}
function reverse(head){
    let currentValue = head
    let prev = null

    while(currentValue){
        const next  = currentValue.next
        currentValue.next = prev
        prev = currentValue
        currentValue = next
    }

    return prev
}