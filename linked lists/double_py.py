import random
class Node:
    def __init__(self,data= None,prev= None,next_=None) -> None:
        self.next = next_
        self.data = data
        self.prev = prev
    
class DoubleLinked:
    def __init__(self) -> None:
        self.head = None
        self.tail = self.head

    def insert_at_begining(self,data):
        if self.head == None:
            self.head = Node(data)
            self.tail = self.head
            return
        # 1 ->
        node = Node(data)
        self.head.prev = node
        node.next = self.head
        self.head = node
    
    def insert_at(self, index: int, data: int):
        if index < 0 or index > self.size:
            raise Exception("Invalid index")

        if index == 0:
            self.insert_at_begining(data)
            return

        count = 0
        itr = self.head
        

        while itr:
            if count == index - 1:
                node = Node(data, itr.next)
                itr.next = node
                break
            itr = itr.next
            count += 1

        if count == self.size - 1:  # Insert at the end of the list
            node = Node(data)
            itr.next = node
    
    def insert_values(self,values:list):
        for value in values:
            self.inserting_at_end(value)

    def remove_at(self,index:int):
        if index<0 or self.size<=index:
            return
        
        if index == 0:
            self.head = self.head.next
            return
        
        count = 0
        itr = self.head

        while itr:
            if count == index - 1:
                # itr.next has the element we want to remove so we point to the next element of that which we will remove
                itr.next = itr.next.next
                self.size -=1
                break

            count += 1
            itr = itr.next

    
    def inserting_at_end(self,data):
        

        if self.head == None:
            node = Node(data)
            self.head = node
            self.tail = self.head
            return
        
        if self.head.next == None:
            node = Node(data,prev=self.head)
            self.head.next = node
            return

        itr = self.head

        node = Node(data)
        while itr:
            if itr.next == None:
                node.prev = itr
                itr.next = node
                self.tail = node
                return
            
            itr = itr.next

    
    def print(self):
        itr = self.head
        values = ""
        while itr:
            values += f"{itr.data} -> "

            itr = itr.next
        
        print(f"Forward: {values}")
    
    def prev_print(self):
        itr = self.tail
        values = ""
        while itr:
            values += f" <- {itr.data}"

            itr = itr.prev
        
        print(f"Reverse: {values}")
    
    def insert_after_value(self, data_after, data_to_insert):
    # Search for first occurance of data_after value in linked list
        itr = self.head
        count = 0
        while itr:
            # banana -> mango -> grapes -> orange ->
            if itr.data == data_after:
                node = Node(data_to_insert,itr.next)
                itr.next = node
                break

            itr = itr.next
            count += 1
        
    def remove_by_value(self, data):
    # Remove first node that contains data
        if self.head.data == data:
            self.head = self.head.next
            return
        
        itr = self.head
        
        
        # banana -> mango -> grapes -> orange ->
        while itr.next:
            if itr.next.data == data:
                itr.next = itr.next.next
                print(f"Deleting {data}")
                break

            itr = itr.next
           
        




dl = DoubleLinked()
for x in range(1,10):
    dl.insert_at_begining(x)

# dl.insert_at_begining(1)
dl.inserting_at_end(10)
dl.print()

dl.prev_print()

        

