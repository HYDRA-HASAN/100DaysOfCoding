function evaluateExpression(expression: string): void {
    switch (expression) {
      case "apple":
        console.log("It's a fruit!");
        break;
      case "carrot":
        console.log("It's a vegetable!");
        break;
      case "banana":
        console.log("It's another fruit!");
        break;
      default:
        console.log("Unknown expression!");
    }
  }
  
  evaluateExpression("apple"); // Output: It's a fruit!
  evaluateExpression("carrot"); // Output: It's a vegetable!
  evaluateExpression("banana"); // Output: It's another fruit!
  evaluateExpression("tomato"); // Output: Unknown expression!
  