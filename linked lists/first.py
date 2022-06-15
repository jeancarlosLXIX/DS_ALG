from requests import head


class Node:
    def __init__(self,data= None, next=None) -> None:
        self.data = data
        self.next = next
    
class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def insert_element_at_begining(self,data):
        node = Node(data, self.head)
        self.head = node

    def print(self):
        if self.head is None:
            print("Linked link is empty")
            return

        iterator = self.head
        linked_list_iterator = ''

        while iterator:
            linked_list_iterator += str(iterator.data) + ' --> '
            iterator = iterator.next
        
        print(linked_list_iterator)
    
    def insert_element_at_end(self,data):
        if self.head is None: # cheking if it is blank
            self.head = Node(data, None)
            return
        
        # if it's not None we will iterate to the end of the linked list
        itr = self.head
        while itr.next: # untill itr is None, that means we reach the final node
            itr = itr.next
        
        # Now we point to the new Node (the one inserted in the end)
        itr.next = Node(data,None)
    
    def insert_values(self, data_list):
        self.head = None
        for data in data_list:
            self.insert_element_at_end(data)
    
    def get_length(self):
        count = 0
        itr = self.head

        while itr:
            count += 1
            itr = itr.next
        
        return count

    def remove_at(self,index):
        if index < 0 or index >= self.get_length():
            raise Exception("Invalid index")
        
        if index == 0:
            self.head =  self.head.next
            return

        count = 0
        itr = self.head 

        while itr:
            if count == index -1:  # we stop at the previous element and make equal to the next.next
                itr.next = itr.next.next
                break
            itr = itr.next

            count += 1
    def insert_at(self,index,data):
        if index < 0 or index >= self.get_length():
            raise Exception("Invalid index")
        
        if index == 0:
            self.insert_element_at_begining(data)
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


if __name__ == "__main__":
    ll = LinkedList()
    ll.insert_values(["Jean", "Carlos", "CR"])
    ll.insert_element_at_end("MASTER")
    ll.insert_at(0,"Fresher")
    ll.print()

# https://github.com/codebasics/data-structures-algorithms-python/blob/master/data_structures/3_LinkedList/3_linked_list_exercise.md