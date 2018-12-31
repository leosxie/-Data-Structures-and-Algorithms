"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
    return Node;
}());
exports.Node = Node;
//双向列表
var LinkList = /** @class */ (function () {
    function LinkList() {
        var datas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            datas[_i] = arguments[_i];
        }
        var _this = this;
        //哨兵检测
        this._head = null;
        this._tail = null;
        this._length = 0;
        this._isEqual = function (prevNode, nextNode) {
            console.log(prevNode.data === nextNode.data);
            return prevNode.data === nextNode.data;
        };
        datas.forEach(function (data) {
            _this._add(data);
        });
    }
    Object.defineProperty(LinkList.prototype, "head", {
        get: function () {
            return this._head.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkList.prototype, "tail", {
        get: function () {
            return this._tail.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkList.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    //在链表的后面插入数据
    LinkList.prototype._add = function (data) {
        var newNode = new Node(data);
        //判断头部节点是否为空
        if (!this._head) {
            this._head = this._tail = newNode;
        }
        else {
            /**
             * 注意顺序，
             * 新节点是插入到链表最后面的
             * 1.把尾巴节点的引用指向新加的节点
             * 2.把新节点的前置引用指向尾节点--节点就串起来了
             * 3.本地变量表示最后一个节点就是先加的节点
             *
             * **/
            //把尾巴连起来
            this._tail.next = newNode;
            //节点闭环 把头节点的上一个节点指向最后新加的节点
            newNode.prev = this._tail;
            //把新加的节点作为头部节点
            this._tail = newNode;
        }
        // 标志数据长度+1
        this._length += 1;
    };
    LinkList.prototype.print = function (callback) {
        var currentNode = this._head;
        while (currentNode) {
            if (typeof callback === 'function') {
                callback(currentNode);
            }
            else {
                console.log(currentNode.data);
            }
            currentNode = currentNode.next;
        }
    };
    /**
     * 在给定节点值后的节点插入一个数据
     * @param val --插入的值
     * @param prev--上一个节点的值-要在这个节点之后插入数据
     */
    LinkList.prototype.insert = function (val, prev) {
        var newNode = new Node(val);
        //构建一个伪节点用于比较值，或者通过这个值去找节点
        var prevNode = new Node(prev);
        var currentNode = this._head;
        //如果没有头部节点代表不没有初始化
        if (!currentNode) {
            return false;
        }
        else {
            //用头部节点指针一直往下走，直到找到prev节点
            while (true) {
                //比较2个节点是否相等的方法
                var isEqual = this._isEqual(currentNode, prevNode);
                if (isEqual) {
                    newNode.next = currentNode.next;
                    newNode.prev = currentNode;
                    currentNode.next = newNode;
                    //判断新节点后还有没有值，有可能是在节点尾部插入的
                    if (newNode.next) {
                        newNode.next.prev = newNode;
                    }
                    else {
                        this._tail = newNode;
                    }
                    this._length++;
                    break;
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
    };
    /**
     *
     * @param {T} val
     * @param {T} after--在节点之前插入数据
     * @returns {boolean}
     */
    LinkList.prototype.insertBefore = function (val, after) {
        var newNode = new Node(val);
        //构建一个伪节点用于比较值，或者通过这个值去找节点
        var afterNode = new Node(after);
        var currentNode = this._tail;
        //如果没有头部节点代表不没有初始化
        if (!currentNode) {
            return false;
        }
        else {
            //用头部节点指针一直往上走，直到找到prev节点
            while (true) {
                //比较2个节点是否相等的方法
                var isEqual = this._isEqual(currentNode, afterNode);
                if (isEqual) {
                    newNode.prev = currentNode.prev;
                    newNode.next = currentNode;
                    currentNode.prev = newNode;
                    //判断新节点后还有没有值，有可能是在节点尾部插入的
                    if (newNode.prev) {
                        newNode.prev.next = newNode;
                    }
                    else {
                        this._head = newNode;
                    }
                    this._length++;
                    break;
                }
                else {
                    if (currentNode.prev) {
                        currentNode = currentNode.prev;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    };
    Object.defineProperty(LinkList.prototype, "isEqual", {
        get: function () {
            return this._isEqual;
        },
        set: function (func) {
            this._isEqual = func;
        },
        enumerable: true,
        configurable: true
    });
    return LinkList;
}());
exports.default = LinkList;
//# sourceMappingURL=LinkList.js.map