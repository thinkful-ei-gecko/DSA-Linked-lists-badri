class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
      if (this.head === null){
        this.insertFirst(item)
        return
      }
      else {
        let currentPtr = this.head
        while (currentPtr.next !== null) {
          currentPtr = currentPtr.next
        }
        currentPtr.next = new _Node(item, null);
      }
    }
    remove(item){ 
      // If the list is empty
      if (!this.head) {
          return null;
      }
      // If the node to be removed is head, make the next node head
      if (this.head.value === item) {
          this.head = this.head.next;
          return;
      }
      // Start at the head
      let currNode = this.head;
      // Keep track of previous
      let previousNode = this.head;

      while ((currNode !== null) && (currNode.value !== item)) {
          // Save the previous node 
          previousNode = currNode;
          currNode = currNode.next;
      }
      if (currNode === null) {
          console.log('Item not found');
          return;
      }
      previousNode.next = currNode.next;
    }
    find(item) {
      if (this.head === null) {
        return;
      }
      let currentNode = this.head
      while (currentNode !== null) {
        if (currentNode.value === item) {
          return currentNode
        }
      }
    }
    insertBefore(item, key) {
      if (key < 0){
        throw new Error('key must be greater than zero')
      }
      let currentNode = this.head
      let prevNode = this.head
      if (!this.head) {
        this.insertFirst(item)
      }
      for (let i = 0; i < key; i++) {
        prevNode = currentNode
        currentNode = currentNode.next
      }
      prevNode.next = new _Node(item, currentNode)
    }
    insertAfter(item, key) {
      if (key < 0){
        throw new Error('key must be greater than zero')
      }
      if (!this.head) {
        this.insertFirst(item)
      }
      let currentNode = this.head
      for (let i = 0; i < key; i++) {
        currentNode = currentNode.next
      }
      currentNode.next = new _Node(item, currentNode.next)
    }
    insertAt(item, key) {
      if (key < 0){
        throw new Error('key must be greater than zero')
      }
      if (key === 0) {
        this.insertFirst(item)
      }
      else {
        let node = this.findNthElement(key -1) 
        let newNode = new _Node(item, null) 
        newNode.next = node.next
        node.next = newNode
      }
    }
    findNthElement(n){
      let currentNode = this.head
      for (let i = 0; i < n; i++) {
        currentNode = currentNode.next
      }
      return currentNode
    }
    display(){
      console.log(JSON.stringify(this.head, null, 2))
    }
    size(){
      let count = 1
      let currentNode = this.head
      while (currentNode.next !== null){
        currentNode = currentNode.next
        count++
      }
      console.log(count)
    }
    isEmpty(){
      if (this.head === null) {
        console.log(true)
      }
        console.log(false)
    }
    findPrevious(item){
      if (this.head === item) {
        console.log('no previous node')
      }
      let currentNode = this.head
      let prevNode = this.head
      while (currentNode !== null) {
        if (currentNode.value === item) {
          console.log(prevNode.value)
          return
        }
        prevNode = currentNode
        currentNode = currentNode.next
      }
      console.log('item not found')
    }
    findLast(){
      if (this.head.next === null) {
        console.log(this.head)
        return
      }
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      console.log(currentNode.value)
      return
    }
    reverse(){
      if (this.head.next === null) {
        return
      }
      if (!this.head) {
        console.log('nothing to reverse *facepalm*')
        return
      }
      let currentNode = this.head
      let prevNode = this.head
      let nextNode = this.head

      while (currentNode !== null) {
        nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
      }
      this.head = prevNode
    }
}

function main() {
  let SLL = new LinkedList()

  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')

  SLL.insertLast('Tauhida')
  SLL.insertBefore('Athena', 1)
  SLL.insertAfter('Hotdog', 2+1)
  SLL.insertAt('Kat', 3)

  SLL.remove('Tauhida')
  SLL.size()
  SLL.isEmpty()
  SLL.findPrevious('Athena')
  SLL.findLast()
  SLL.reverse()
  SLL.display()

}

main()

// 4. What does this program do?
//
  // function WhatDoesThisProgramDo(lst) {
  //   let current = lst.head;
  //   while (current !== null) {
  //       let newNode = current;
  //       while (newNode.next !== null) {
  //           if (newNode.next.value === current.value) {
  //               newNode.next = newNode.next.next;
  //           }
  //           else {
  //               newNode = newNode.next;
  //           }
  //       }
  //       current = current.next;
  //   }
  // }
//
// I think it removes any nodes with duplicate values 
//  from the LL
//
// The time complexity is probably O(n^2) 
//  because of the nested while loops


