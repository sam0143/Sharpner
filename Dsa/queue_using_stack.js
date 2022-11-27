class Queue{
    enq=[];
    deq=[];
    push(x){
        this.enqueue.push(x);
    }
    pop(){
        if(!this.deq.length){
            while(this.enq.length){
                this.deq.push(this.enq.pop());
            }
        }
        return this.deq.pop();
    }
    peek(){
        if(!this.deq.length) return this.enq[0];
        return this.deq[this.deq.length-1];
    }
    empty(){
        return !this.deq.length && !this.enq.length;
    }
}