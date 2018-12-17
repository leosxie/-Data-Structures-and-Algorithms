"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**双向节点类型**/
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
    Object.defineProperty(LinkList.prototype, "lenght", {
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
            //把新家的节点作为头部节点
            this._tail = newNode;
        }
        // 标志数据长度+1
        this._length += 1;
    };
    //插入一个节点
    LinkList.prototype.insert = function (node, prev) {
    };
    return LinkList;
}());
exports.default = LinkList;
