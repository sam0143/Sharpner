class minStack{
    constructor(){
        this.stack=[]
    }
    push(element){
       return this.stack.push(element);
    }
    pop(){
        if(this.stack.length === 0) return "Stack is empty"
        return this.stack.pop();
    }
    isEmpty(){
        if(this.stack.length === 0)
            return true
        else
            return false
    }
    isFull(){
        if (this.stack[this.stack.length-1])
        return true
        else
        return false
    }
    getMin(){
        return Math.min(...this.stack);
    }
};

var minstack = new minStack();
minstack.push(18);
minstack.push(19);
minstack.push(29);
minstack.push(15);
minstack.push(16);
console.log(minstack.getMin());

