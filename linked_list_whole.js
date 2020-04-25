class linkedList {
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
        let counter = 0
        let currentNode = this.head
        while (counter != index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        const newNode = {
            value: value, 
            next: this.head,
        }
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
    remove(index) {
        if (index >= this.length) {
            let leaderNode = this.traverseIndex(this.length-2)
            leaderNode.next = null
            this.length--
        }
        else {
        const leaderNode = this.traverseIndex(index-1)
        const deleteNode = leaderNode.next
        leaderNode.next = deleteNode.next
        this.length--
        }
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
    lengthList() {
        const currentNode = this.head
        let counter = 0
        while(counter<this.length) {
            counter++;
        }
        return counter
    }
}

myList = new linkedList(30)
myList.append(40)
myList.prepend(0)
myList.insert(1,10)
myList.insert(2,20)
myList.insert(34,69)
myList.insert(4,54)
console.log(myList.printList())
// myList.remove(4)
// console.log(myList.printList())

