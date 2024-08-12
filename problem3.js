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
    
    isBalanced(s) {
      // "{[()]}"  ")(][}{"
      const matchingBracket = { ")": "(", "}": "{", "]": "[" };
      for (const char of s) {
        // console.log(char in matchingBracket, matchingBracket[char])
        if (char in matchingBracket) {
          // console.log(stack[stack.length - 1], matchingBracket[char])
          if (this.totalSize === 0 || this.top.data !== matchingBracket[char]) {
            return false;
          }

          let a = this.pop();
          // console.log(a)
        } else if (char === "(" || char === "{" || char === "[") {
          this.push(char);
        }
      }
      return this.totalSize === 0;
    },

    push(element) {
      let newNode = Node(element);
      // console.log(newNode)
      newNode.next = this.top;
      this.top = newNode;
      // console.log(this.top)
      this.totalSize += 1;
    },

    pop() {
      //   if (this.isEmpty()) {
      //     return "Stack is Empty";
      //   }
      let lastNode = this.top;
      // console.log(lastNode)
      this.top = this.top.next;
      // console.log(this.top)
      this.totalSize -= 1;
      return lastNode.data;
    },
  };
}

const stack1 = Stack();
console.log(stack1.isBalanced("{[()]}")); // Output: true

const stack2 = Stack();
console.log(stack2.isBalanced("[{(}]")); // Output: false

const stack3 = Stack();
console.log(stack3.isBalanced("a[b{c}d]e(f)g")); // Output: true

const stack4 = Stack();
console.log(stack4.isBalanced(")(][}{")); // Output: false



