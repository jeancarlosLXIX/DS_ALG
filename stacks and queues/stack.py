class Node:
    def __init__(self,data,next = None):
        self.data = data
        self.next = next

class Stack:
    def __init__(self) -> None:
        self.top = None
        self.bottom = None
        self.length = 0

    def peek(self):
        if self.top is None:
            print(f"Top is {self.top}")
        else:
             print(f"Value is {self.top}")

    

    def push(self,value):
        newNode = Node(value)

        if self.top == None:
            self.bottom = newNode
            self.top = newNode
        else:
            hold_top = self.top
            self.top = newNode
            self.top.next = hold_top
        
        self.length += 1
    
    def pop(self):
        if self.top == None:
            print("Empty")
            return
        elif self.top == self.bottom:
            self.top = None
            self.bottom = None
        else:
            self.top = self.top.next
            self.length -= 1
    
    def print_stack(self):
        if self.top == None:
            print("Stack empty")
        else:
            current_pointer = self.top
            while(current_pointer!=None):
                print(current_pointer.data)
                current_pointer = current_pointer.next
    

my_stack = Stack()

my_stack.peek()
my_stack.push("Google")
my_stack.push("Youtube")
my_stack.push("Discord")
my_stack.print_stack()