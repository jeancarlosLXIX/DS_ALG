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

arrValues = []
getValues(a,arrValues)
console.log(arrValues);

function getValues(head,val){
    if (head === null) return
    val.push(head.value)
    getValues(head.next, val)
}

