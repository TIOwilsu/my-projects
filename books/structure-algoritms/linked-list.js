class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        const node = new ListNode(data)
        node.next = this.head;
        let current = node;

        if(!current.next?.next && !current.next?.previous) {
            current.previous = node;
        }
        
        while(current !== null && current.next !== null) {
            current.next.previous = current;
            current = current.next;
        }

        this.head = node;
    }

    addLast(data) {
        const node = new ListNode(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;

        while(tail.next !== null) {
            tail = tail.next;
        }

        node.previous = tail;
        tail.next = node;
    }

    remove(data) {
        if(!this.head) {
            return this.head;
        }

        const dummy = new ListNode(0);
        dummy.next = this.head;

        let current = dummy;

        while(current !== null && current.next !== null) {
            if(current.next.data === data && current.next.next) {
                current.next = current.next.next;
            } 
            else {
                current = current.next;
            }
        }
        
        return dummy.next;
    }

    removeFirst() {
        if(!this.head) {
            return this.head;
        }

        if(!this.head.next) {
            this.head = null;
            return this.head;
        }

        this.head.next.previous = null;
        this.head = this.head.next;

        return this.head;
    }

    removeLast() {
        if(!this.head) {
            return this.head;
        }

        if(!this.head.previous && !this.head.next){
            this.head = null;
            return this.head;
        }

        const dummy = new ListNode(0);
        dummy.next = this.head;

        let current = dummy;

        while(current !== null && current.next !== null) {
            if(!current.next.next) {
                current.next = current.next.next;
            } 
            else {
                current = current.next;
            }
        }
        
        return dummy.next;
    }

    find(data) {
        if(!this.head) {
            return this.head;
        }

        let current = this.head;
        let found = null;

        while(current !== null && current.next !== null) {
            if(current.data === data) {
                found = current;
                break;
            } 
            else {
                current = current.next;
            }
        }
        
        return found;
    }

    printList() {
        let current = this.head;

        while (current !== null) {
          console.log({ current: current.data, next: current.next, previous: current.previous });
          current = current.next;
        }
    }
}

const createList = () => {
    const list = new LinkedList();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addLast(4);
    list.addLast(5);
    list.addLast(6);
    list.printList();
};
  
createList();