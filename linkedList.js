class _Node {
    constructor(value, next) {
      this.value = value
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }
  
    insertFirst(item) {
      this.head = new _Node(item, this.head)
    }
  
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item)
      }
      else {
        let tempNode = this.head
        while (tempNode.next !== null) {
          tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, null)
      }
    }
  
    insertBefore(item, value) {
      if (this.head === null) {
        this.insertFirst(item)
      }
      let currNode = this.head
      let previousNode = this.head
  
      while ((currNode !== null) && (currNode.value !== value)) {
        previousNode = currNode
        currNode = currNode.next
      }
      if (currNode === null) {
        this.insertLast(item)
        return
      }
      previousNode.next = new _Node(item, currNode)
    }
  
    insertAfter(item, value) {
      if (this.head === null) {
        this.insertFirst(item)
      }
  
      let currNode = this.head
  
      while ((currNode !== null) && (currNode.value !== value)) {
        currNode = currNode.next
      }
      if (currNode === null) {
        this.insertLast(item)
        return
      }
      currNode.next = new _Node(item, currNode)
    }
  
    insertAt(item, position) {
      if (this.head === null) {
        this.insertFirst(item)
      }
  
      if (!position) {
        return null
      }
  
      let curNode = this.head
      let prevNode = this.head
      for (let i = 0; i < position; i++) {
        prevNode = currNode
        currNode = currNode.next
      }
      prevNode.next = new _Node(item, currNode)
      return
    }
  
    insertCycle(item, next) {
      if (this.head === null) {
        this.insertFirst(item)
      }
      else {
        let tempNode = this.head
        while (tempNode.next !== null) {
          tempNode = tempNode.next
        }
        let nextNode = this.head
        while (nextNode.next !== null && nextNode.value !== next) {
          nextNode = nextNode.next
        }
        tempNode.next = new _Node(item, nextNode)
      }
    }
  
    find(item) {
      // start at the head
      let currNode = this.head
      // if the list is empty
      if (!this.head) {
        return null
      }
      // check for the item
      while (currNode.value !== item) {
        /* return null if it's the end of the list
           and the item is not on the list */
        if (currNode.next === null) {
          return null
        }
        else {
          // otherwise, keep looking
          currNode = currNode.next
        }
      }
      // found it
      return currNode
    }
  
    remove(item) {
      // if the list is empty
      if (!this.head) {
        return null
      }
      // if the node to be removed is head, make the next node head
      if (this.head.value === item) {
        this.head = this.head.next
        return
      }
      // start at the head
      let currNode = this.head
      // keep track of previous
      let previousNode = this.head
  
      while ((currNode !== null) && (currNode.value !== item)) {
        // save the previous node
        previousNode = currNode
        currNode = currNode.next
      }
      if (currNode === null) {
        console.log('Item not found')
        return
      }
      previousNode.next = currNode.next
    }
}
  
module.exports = LinkedList;