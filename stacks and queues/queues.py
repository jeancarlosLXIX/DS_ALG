class Node:
    def __init__(self,data,next=None):
        self.data = data
        self.next = next
    
class Queues:
    def __init__(self) -> None:
        self.first = None
        self.last = None
        self.length = 0
    
    def peek(self):
        '''This will show the very first item '''
        return self.first
    
    def enqueue(self,value):
        new_last = Node(value)

        if self.first is None:
            self.first = new_last
            self.last = new_last
        else:
            self.last.next = new_last
            self.last = new_last
        
        self.length += 1

    def dequeue(self):
        if self.first:
            self.first = self.first.next
            self.length -= 1

    def is_empty(self):
        return bool(self.length)
    

    def print_queue(self):
        if self.first == None:
            print("Queue empty")
        else:
            current_pointer = self.first
            counter = 1
            while(current_pointer!=None):
                print(f"{counter}) {current_pointer.data}")
                current_pointer = current_pointer.next
                counter += 1

my_queue = Queues()

for x in ["Joe", "Matt","Pavel","Samir"]:
    my_queue.enqueue(x)


my_queue.print_queue()
my_queue.dequeue()
print('*'*9)
my_queue.print_queue()




# Joe
# Matt
# Pavel
# Samir