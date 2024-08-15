class BrowserHistory {
    constructor() {
      this.backStack = new Stack();
      this.forwardStack = new Stack();
      this.currentPage = null;
    }
  
    visitNewPage(page) {
      if (this.currentPage !== null) {
        this.backStack.push(this.currentPage);
      }
      this.currentPage = page;
      this.forwardStack = new Stack(); // Clear forward history
    }
  
    goBack() {
      if (!this.backStack.isEmpty()) {
        this.forwardStack.push(this.currentPage);
        this.currentPage = this.backStack.pop();
      } else {
        console.log("No pages to go back to");
      }
    }
  
    goForward() {
      if (!this.forwardStack.isEmpty()) {
        this.backStack.push(this.currentPage);
        this.currentPage = this.forwardStack.pop();
      } else {
        console.log("No pages to go forward to");
      }
    }
  
    getCurrentPage() {
      return this.currentPage;
    }
  }
  
  // Example usage:
  const browser = new BrowserHistory();
  browser.visitNewPage("Google");
  browser.visitNewPage("Yahoo");
  browser.visitNewPage("EBay");
  browser.goBack();
  console.log(browser.getCurrentPage()); // Yahoo
  browser.goForward();
  console.log(browser.getCurrentPage()); // EBay
  browser.visitNewPage("Apple");
  console.log(browser.getCurrentPage()); // Apple
  