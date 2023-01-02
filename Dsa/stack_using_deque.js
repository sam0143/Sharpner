class DeQueue{
    constructor(){
        this.value=0;
        this.prev=null;
        this.next=null
    }
}
class deque{
    constructor(){
        this.head=this.tail=null;
    }

    isEmpty(){
        if(this.head == null)
            return true;
        return false;
    }
    
    size(){
        if(!this.isEmpty()){
            var temp=this.head;
            var len=0;
            while(temp != nul){
                len++;
                temp=temp.next;
            }
            return len;
        }
        return 0;
    }
    
    insert_first(element){
        let temp = new DeQueue;
         temp.value=element;

        if(this.head == null){
            this.head = this.tail = temp;
            temp.prev = temp.next = null;
        }
        else{
            this.head.prev = temp;
            temp.next=this.head;
            temp.prev=null;
            this.head=temp;
        }
    }

    insert_last(element){
        let temp = new DeQueue;
        temp.value=element; 
        if(this.head == nul){
            this.head = this.tail = temp;
            temp.prev = temp.next = null ;
        }
        else{
            this.tail.next = temp;
            temp.next=null;
            temp.prev=this.tail;
            this.tail=temp;
        }
    }

    remove_first(){
        if(!this.isEmpty()){
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev= null;
            return;
        }
    }

    remove_last(){
        if(!this.isEmpty()){
            let temp = this.tail;
            this.tail=this.tail.prev;
            this.tail.next=null

            return;
        }
    }

    display(){
        if(!this.isEmpty()){
            let temp=this.head;
            while(temp != null){
                temp=temp.next;
            }
            return;
        }
    }
}

class stack{
    constructor(){
        this.d = new deque ;
    }
    push(element){
         this.d.insert_first(element);
    }
    pop(){
        this.d.remove_last()
    }
    size(){
        return this.d.size()
    }
    display(){
        this.d.display()
    }
}

let st = new stack();
st.push(1);
st.push(2);
st.display()