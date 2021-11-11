class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  insertAtEnd(val) {
    const node = new Node(val);
    let tempHead = this.head;
    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      while (tempHead.next) {
        tempHead = tempHead.next;
      }
      tempHead.next = node;
      this.size++;
    }
  }

  insertAtBegin(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.size++;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  }

  insertAtPos(pos, val) {
    if (pos > this.size + 1 || pos <= 0) {
      console.log(`${pos} is invalid position in list`);
    } else {
      if (pos === 1) {
        this.insertAtBegin(val);
        return;
      }
      if (pos === this.size + 1) {
        console.log("END");
        this.insertAtEnd(val);
        return;
      }
      const node = new Node(val);
      let count = 1;
      let tempNode = this.head;
      while (!(count === pos - 1)) {
        tempNode = tempNode.next;
        count++;
      }
      node.next = tempNode.next;
      tempNode.next = node;
      this.size++;
    }
  }

  deleteAtEnd() {
    if (this.head === null) {
      console.log("List is empty");
    } else if (this.size === 1) {
      this.head = null;
      this.size--;
    } else {
      let tempNode = this.head;
      while (tempNode.next.next) {
        tempNode = tempNode.next;
      }
      tempNode.next = null;
      this.size--;
    }
  }

  deleteAtBegin() {
    if (this.head === null) {
      console.log("List is empty");
    } else if (this.size === 1) {
      this.head = null;
      this.size--;
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }

  deleteAtPos(pos) {
    if (this.head === null) {
      console.log("List is empty");
    } else if (pos > this.size || pos <= 0) {
      console.log(`${pos} is invalid position in list`);
    } else if (pos === 1) {
      this.deleteAtBegin();
    } else if (pos === this.size) {
      this.deleteAtEnd();
    } else {
      let tempNode = this.head;
      let prevNode;
      let count = 1;
      while (!(count === pos)) {
        prevNode = tempNode;
        tempNode = tempNode.next;
        count++;
      }
      prevNode.next = tempNode.next;
      this.size--;
    }
  }

  print() {
    let tempList = this.head;
    const arr = [];
    if (tempList === null) {
      console.log("List is empty");
      return;
    }
    while (tempList) {
      arr.push(tempList.value);
      tempList = tempList.next;
    }
    console.log(arr);
  }
}

function createLinkedList() {
  const list = new LinkedList();

  list.insertAtEnd(4);
  list.insertAtEnd(8);
  list.insertAtEnd(23);
  list.insertAtEnd(56);
  list.print(); // [ 4, 8, 23, 56 ]
}

createLinkedList();
