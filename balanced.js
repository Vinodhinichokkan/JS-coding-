function isBalanced(str){
    //create empty stack
    const stack = [];
    //Traverse each character in a string
    for (const char of str) {
        
    } {
        if(char == '('){
            stack.push(char)
        }
        else if(char == ')'){
            //if stack is empty
            if(stack.length == 0){
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}
console.log(isBalanced("(())"));
  