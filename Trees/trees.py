import json

class Node:
    def __init__(self,value):
        self.value = value
        self.right = None
        self.left = None


class MyTree:
    def __init__(self) -> None:
        self.root = None

    def insert(self,value):
        
        node = Node(value)
        
        if self.root is None:
            self.root = node
            return self
        
        current_value = self.root

        while current_value:

            if current_value is value: return None

            if current_value.value < value:
                if current_value.left == None:
                    current_value.left = node
                    return self
                
                current_value = current_value.left
            else:
                if current_value is None:
                    current_value.right = current_value
                    return self
                
                current_value = current_value.right


tree = MyTree()


for x in [8,4,12,2,6,10,14]:
    tree.insert(x)

# tree.insert(4)
# tree.insert(12)
# tree.insert(2)
# tree.insert(6)
# tree.insert(10)
# tree.insert(14)
print(tree.root.value)



