// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertLast(data) {

        let last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let prev = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, prev.next);
        prev.next = node;

    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) return null;
        let node = this.head;

        while (node.next) {
            node = node.next;
        }
        return node;
    }

    getAt(index) {
        if (!this.head) return null;

        let node = this.head;
        let count = 0;

        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next
        }

        return node;
    }

    removeFirst() {
        this.head = null;
    }

    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;

        while (node.next) {
            this.prev = node;
            node = node.next;
        }

        prev.next = null;
    }

    removeAt(index) {
        if (!this.head) return;

        if (this.index === 0) {
            this.head = this.head.next;
            return;
        }

        let prev = this.getAt(index - 1);

        if (!prev || !prev.next) {
            return;
        }
        prev.next = prev.next.next;
    }

    size() {
        if (!this.head) return 0;

        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next
        }

        return count;
    }

    clean() {
        this.head = null;
    }


    forEach(fn) {
        let node = this.head;
        let count = 0;

        while (node) {
            count++;
            fn(node, count)
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;

        while (node) {
            yield node;
            node = node.next
        }
    }

}

module.exports = { Node, LinkedList };
