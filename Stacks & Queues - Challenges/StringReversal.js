class Stack {
    constructor() {
      this.first = null;
      this.size = 0;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (this.isEmpty()) {
        this.first = newNode;
      } else {
        newNode.next = this.first;
        this.first = newNode;
      }
      this.size++;
    }
  
    pop() {
      if (this.isEmpty()) throw new Error("Stack is empty");
      const removedNode = this.first;
      this.first = this.first.next;
      this.size--;
      return removedNode.val;
    }
  
    peek() {
      if (this.isEmpty()) return null;
      return this.first.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }
  
  function reverseString(str) {
    const stack = new Stack();
    
    // Push all characters onto the stack
    for (let char of str) {
      stack.push(char);
    }
  
    let reversedStr = '';
    
    // Pop characters from stack and build the reversed string
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
    
    return reversedStr;
  }
  
  // Example usage:
  console.log(reverseString("hello")); // "olleh"
  