// Sum numbers
class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}


const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(7)

a.next = b
b.next = c
c.next = d

sum = {total:0}
function sumNodes(head,obj){
    if (head === null) return
    obj.total += head.value
    sumNodes(head.next,obj)
}

sumNodes(a,sum)
console.log(sum);

