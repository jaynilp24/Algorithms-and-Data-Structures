// this code contains the linked list method using the node class
// this eliminate the need for using newNode method for append and prepend functions

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class myLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head 
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)  
        this.tail.next = newNode        
        this.tail = newNode             
        this.length++;                  
    }
    prepend(value) {
        const newNode =  new Node(value)
        this.head = newNode
        this.length++;
    }
}

const myList = new myLinkedList(10)
myList.append(0)
myList.prepend(89)



console.log(myList.printList())