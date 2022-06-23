# Node class
class Node:
 
    # Function to initialize the node object
    def __init__(self, data):
        self.data = data  # Assign data
        self.next = None  # Initialize next as null
 
# Linked List class
class LinkedList:
   
    # Function to initialize the Linked List object
    def __init__(self):
        self.head = None
        self.size = 0
    
    # This function prints contents of linked list
    # starting from head
    def printList(self):
        temp = self.head
        while (temp):
            print (temp.data)
            temp = temp.next


    def count(self):
        temp = self.head
        size = 0
        while (temp):
            size += 1
            temp = temp.next

        return size
    
    
    # This function is in LinkedList class
    # Function to insert a new node at the beginning
    def push(self, new_data):

        new_node = Node(new_data)
            
        # 3. Make next of new Node as head
        new_node.next = self.head
            
        # 4. Move the head to point to new Node 
        self.head = new_node

 
llist = LinkedList()

llist.head = Node(1)
second = Node(2)
third = Node(3)
llist.push(69)

llist.head.next = second; # Link first node with second
second.next = third; # Link second node with the third node

llist.printList()
print(f"Size: {llist.count()}")

'''
Time Complexity	  Worst Case	Average Case
Search	            O(n)	    | O(n)
Insert	            O(1)	    | O(1)
Deletion            O(1)	    | O(1)
'''