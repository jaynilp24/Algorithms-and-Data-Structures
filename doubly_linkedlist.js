// implementing the doubly linked list 

class doublylinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head
        this.length = 1
    }
    traverseIndex(index) {
        let currentNode = this.head
        let counter = 0
        while(counter != index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    append(value) {
        const newNode = {
            value: value,
            next: null, 
            prev: null, 
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: this.head,
            prev: null,
        }
        this.head.prev = newNode
        this.head = newNode
        this.length++
    }
    insert(index, value) {
        //check index parameter
        if(index >= this.length) {
            return this.append(value)
        }
        const newNode = {
            value: value,
            next: null,
            prev: null,
        }
        const leaderNode = this.traverseIndex(index-1)
        const holdingPointer = leaderNode.next
        leaderNode.next = newNode
        newNode.prev = leaderNode
        newNode.next = holdingPointer
        holdingPointer.prev = newNode
        this.length++
    }
    printList() {
        const array = []
        let currentNode = this.head
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
}

const myList = new doublylinkedList(1)
myList.append(2)
myList.append(3)
myList.append(4)
myList.append(5)
console.log('Original List: ', myList.printList())

myList.insert(3,56)
// myList.insert(45,69)

console.log('Modified List: ', myList.printList())

