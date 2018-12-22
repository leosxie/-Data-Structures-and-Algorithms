"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}
exports.Node = Node;
class LinkList {
    constructor(...datas) {
        this._head = null;
        this._tail = null;
        this._length = 0;
        this._isEqual = function (prevNode, nextNode) {
            console.log(prevNode.data === nextNode.data);
            return prevNode.data === nextNode.data;
        };
        datas.forEach((data) => {
            this._add(data);
        });
    }
    get head() {
        return this._head.data;
    }
    get tail() {
        return this._tail.data;
    }
    get length() {
        return this._length;
    }
    _add(data) {
        let newNode = new Node(data);
        if (!this._head) {
            this._head = this._tail = newNode;
        }
        else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this._length += 1;
    }
    *iterator() {
        let currentItem = this._head;
        while (currentItem) {
            yield currentItem.data;
            currentItem = currentItem.next;
        }
    }
    [Symbol.iterator]() {
        return this.iterator();
    }
    insert(val, prev) {
        let newNode = new Node(val);
        let prevNode = new Node(prev);
        let currentNode = this._head;
        if (!currentNode) {
            return false;
        }
        else {
            while (true) {
                if (this._isEqual(currentNode, prevNode)) {
                    newNode.next = currentNode.next;
                    newNode.prev = currentNode;
                    currentNode.next = newNode;
                    if (newNode.next) {
                        newNode.next.prev = newNode;
                    }
                    else {
                        this._tail = newNode;
                    }
                    this._length++;
                    return true;
                }
                else {
                    if (currentNode.next) {
                        currentNode = currentNode.next;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
    set isEqual(func) {
        this._isEqual = func;
    }
    get isEqual() {
        return this._isEqual;
    }
}
exports.default = LinkList;
//# sourceMappingURL=LinkList.js.map