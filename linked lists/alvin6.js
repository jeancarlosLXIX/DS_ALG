// Zipper link
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

const w = new Node('W')
const x = new Node('X')
const y = new Node('Y')
const z = new Node('Z')

a.next = b
b.next = c
c.next = d

w.next = x
x.next = y
y.next = z

const zipperList = (head1, head2) =>{
    let current1 = head1.next
    let current2 = head2
    let tail = head1
    let count = 0
    while (current1 !== null && current2 !== null){
        if (count % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }

        tail = tail.next

        count++
    }
    if (current1 !== null) tail.next = current1
    if (current2 !== null) tail.next = current2

    return head1
}

//https://youtu.be/Hj_rA0dhr2I?t=5212
console.log(zipperList(a,w));