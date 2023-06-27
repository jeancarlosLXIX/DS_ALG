import random
class Node:
    def __init__(self,data= None, next_=None) -> None:
        self.data = data
        self.next = next_
    
class LinkedList:
    def __init__(self) -> None:
        self.head = None
        self.size = 0

    def insert_at_begining(self,data):
        node = Node(data,self.head)
        self.head = node

    
        self.size += 1
    
    def insert_at(self, index: int, data: int):
        if index < 0 or index > self.size:
            raise Exception("Invalid index")

        if index == 0:
            self.insert_at_beginning(data)
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

        self.size += 1
    
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
        node = Node(data)

        if self.head == None:
            self.head = node
            self.size += 1
            return

        itr = self.head

        while itr:
            if itr.next == None:
                
                itr.next = node
                self.size += 1
                return
            
            itr = itr.next

    
    def print(self):
        itr = self.head
        values = ""
        while itr:
            values += f"{itr.data} -> "

            itr = itr.next
        
        print(f"Values: {values}")
    
    def insert_after_value(self, data_after, data_to_insert):
    # Search for first occurance of data_after value in linked list
        itr = self.head
        count = 0
        while itr:
            # banana -> mango -> grapes -> orange ->
            if itr.data == data_after:
                print("Found")
                node = Node(data_to_insert,itr.next)
                itr.next = node
                break

            itr = itr.next
            count += 1

            

    # Now insert data_to_insert after data_after node
        

    def remove_by_value(self, data):
    # Remove first node that contains data
        pass


ll = LinkedList()
ll.insert_values(["banana","mango","grapes","orange"])
ll.print()
ll.insert_after_value("mango","apple") # insert apple after mango
ll.print()
# ll.remove_by_value("orange") # remove orange from linked list
# ll.print()
# ll.remove_by_value("figs")
# ll.print()
# ll.remove_by_value("banana")
# ll.remove_by_value("mango")
# ll.remove_by_value("apple")
# ll.remove_by_value("grapes")
# ll.print()


        

