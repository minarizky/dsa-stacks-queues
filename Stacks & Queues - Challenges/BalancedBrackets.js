function isBalanced(str) {
    const stack = new Stack();
    const matchingBrackets = { '(': ')', '{': '}', '[': ']' };
  
    for (let char of str) {
      if (matchingBrackets[char]) {
        stack.push(char);
      } else if (Object.values(matchingBrackets).includes(char)) {
        if (stack.isEmpty() || matchingBrackets[stack.pop()] !== char) {
          return false;
        }
      }
    }
  
    return stack.isEmpty();
  }
  
  // Example usage:
  console.log(isBalanced("(hi) [there]")); // true
  console.log(isBalanced("(hi [there]"));  // false
  