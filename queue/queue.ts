class Queue<T> {
    public items: T[];
    constructor() {
        this.items = [];
    }

    enqueue(node:T) {
        this.items.push(node);
    };

    dequeue(): T | undefined {
        return this.items.shift();
    }



}