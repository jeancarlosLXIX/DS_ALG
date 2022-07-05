class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class MyTree{
    constructor(){
        this.root = null;
      }

      insert(value){
        const newNode = new Node(value)
        let current = this.root
        if (!current) {
            this.root = new Node(value)
            return this
        }

        while (current) {
            if(value === current.value) return undefined;

            if (current.value > value) { // Check if the value goes left or right
                 if (current.right === null) {
                    current.right = newNode
                    return this
                 }
                 current = current.right
            } else{
                if (current.left === null) {
                    current.left = newNode
                    return this
                }

                current = current.left
            }

        } //END WHILE
      }
}

const tree = new MyTree()


console.log(tree.root)
tree.insert(8)
tree.insert(4)
tree.insert(12)
tree.insert(2)
tree.insert(6)
tree.insert(10)
tree.insert(14)
// tree.insert(16)
console.log(tree)

console.log(JSON.stringify(tree))