// pointer tryouts

// const obj1 = { x : 10};
// const obj2 = obj1;

// obj2.x = 12
// obj1.x = 13
// console.log(obj1)

// start of linked list 
// creating a linked list 10 -> 5 -> 15


let myLinkedList = {                    // object method of linked list, manually creating the list 
    head: {                             // in this method, the problem is that you need to manually append, not suitable
        value: 10,
        next: {
            value: 5, 
            next: {
                value: 15,
                next: null,
            }
        } 
    }
}

//console.log(myLinkedList.head.next.next.value)

// now we shall create the linked list based on class 

class myLinkedList1 {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head 
        this.length = 1;
    }
    append(value) {
        const newNode = {               //constant newNode given properties of LL, value and next pointer
            value: value,               
            next: null,
        };
        this.tail.next = newNode        // we want the current tail's next to point to newNode and not NULL
        this.tail = newNode             // finally, we make newNode the tail itself
        this.length++;                  // length of the LL increases as node is added.
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: this.head,
        }
        this.head = newNode
        this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
        }
}

const myList = new myLinkedList1(10)
myList.append(5)
myList.append(15)
myList.prepend(1)
// console.log(myList.head.value, '->', myList.head.next.value, '->', myList.tail.value)
console.log(myList.printList())