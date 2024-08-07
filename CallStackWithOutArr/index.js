function Node(data) {
  return {
    data: data,
    next: null,
  };
}

function Stack() {
  return {
    top: null,
    totalSize: 0,

    push(element) {
      let newNode = Node(element);
      // console.log(newNode)
      newNode.next = this.top;
      this.top = newNode;
      // console.log(this.top)
      this.totalSize += 1;
    },

    pop() {
      if (this.isEmpty()) {
        return "Stack is Empty";
      }
      let lastNode = this.top;
      // console.log(lastNode)
      this.top = this.top.next;
      // console.log(this.top)
      this.totalSize -= 1;
      return lastNode.data;
    },

    peek() {
      if (this.isEmpty()) {
        return "Stack is Empty";
      }
      return this.top.data;
    },

    size() {
      return this.totalSize;
    },

    isEmpty() {
      return this.top === null;
    },

    clear() {
      // console.log(this.top)
      this.top = null;
      // console.log(this.top)
      this.size = 0;
    },
  };
}

const stack1 = Stack();

// console.log(stack1)
stack1.push(5);
stack1.push(10);
stack1.push(14);

console.log(stack1.pop());
console.log(stack1.pop());

console.log(stack1.peek());
console.log(stack1.size());
console.log(stack1.size());
console.log(stack1.isEmpty());

stack1.clear();

console.log(stack1.isEmpty());
