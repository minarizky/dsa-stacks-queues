class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    enqueue(val) {
      const newNode = new Node(val);
      if (this.isEmpty()) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.size++;
    }
  
    dequeue() {
      if (this.isEmpty()) throw new Error("Queue is empty");
      const removedNode = this.first;
      this.first = this.first.next;
      this.size--;
      if (this.size === 0) this.last = null;
      return removedNode.val;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  }
  
  function findSurvivor(n, k) {
    const queue = new Queue();
    
    // Initialize the queue with people numbered 1 to n
    for (let i = 1; i <= n; i++) {
      queue.enqueue(i);
    }
  
    while (queue.size > 1) {
      // Move the first k-1 people to the back of the queue
      for (let i = 1; i < k; i++) {
        queue.enqueue(queue.dequeue());
      }
      // Remove the k-th person
      queue.dequeue();
    }
  
    return queue.dequeue(); // The last remaining person
  }
  
  // Example usage:
  console.log(findSurvivor(10, 3)); // 4
  