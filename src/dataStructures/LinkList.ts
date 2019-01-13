/**双向节点类型
 * https://github.com/sfkiwi/linked-list-typescript/blob/master/src/index.ts
 * **/
export interface NodeProps<T> {
  data: T;
  next?: Node<T>;
  prev?: Node<T>;
}
export class Node<T> {
  data: T;
  next?: Node<T>;
  prev?: Node<T>;
  constructor(value: T) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}
// 双向列表2
export default class LinkList<T> {
    // 哨兵检测
  private _head: Node<T> = null;
  private _tail: Node<T> = null;
  private _length: number = 0;
  private _isEqual: Function = function (prevNode: Node<T>, nextNode: Node<T>) {
    return prevNode.data === nextNode.data;
  };

  get head(): T {
    return this._head.data;
  }
  get tail(): T {
    return this._tail.data;
  }
  get length(): number {
    return this._length;
  }
    // 在链表的后面插入数据
  _add(data: T): void {

    const newNode = new Node(data);
        // 判断头部节点是否为空
    if (!this._head) {
      this._head = this._tail = newNode;
    } else {
            /**
             * 注意顺序，
             * 新节点是插入到链表最后面的
             * 1.把尾巴节点的引用指向新加的节点
             * 2.把新节点的前置引用指向尾节点--节点就串起来了
             * 3.本地变量表示最后一个节点就是先加的节点
             *
             * **/

            // 把尾巴连起来
      this._tail.next = newNode;

            // 节点闭环 把头节点的上一个节点指向最后新加的节点
      newNode.prev = this._tail;

            // 把新加的节点作为头部节点
      this._tail = newNode;
    }
        // 标志数据长度+1
    this._length += 1;

  }
  constructor(...datas: T[]) {
    datas.forEach((data) => {
      this._add(data);
    });
  }
    /**
     * 主要是用来迭代用的，for of
     * var c = {};
     * c[Symbo.iterator] = function*(){
     *    yield data1;
     *    yield data2;
     *    ......
     * }
     * console.log([...c]);
     *
     */
  *iterator(): IterableIterator<T> {
    let currentNode = this._head;

    while (currentNode) {
      yield currentNode.data;
      currentNode = currentNode.next;
    }
  }

  [Symbol.iterator]() {
    return this.iterator();
  }
  toArray(): T[] {
    return [...this];
  }
  print(callback?: Function) {
    let currentNode = this._head;
    while (currentNode) {
      if (typeof callback === 'function') {
        callback(currentNode);
      } else {
        console.log(currentNode.data);
      }

      currentNode = currentNode.next;
    }
  }
    /**
     * 在给定节点值后的节点插入一个数据
     * @param val --插入的值
     * @param prev--上一个节点的值-要在这个节点之后插入数据
     * @param allowRepeat 是否允许重复插入，默认是true
     */
  insert(val: T, prev: T, allowRepeat: boolean= true):boolean {

    const newNode = new Node(val);
    if (!allowRepeat && this.checkExist(val)) {
      throw new Error(`插入的值:【${JSON.stringify(val)}】已经存在`);
    }
        // 构建一个伪节点用于比较值，或者通过这个值去找节点
    const prevNode = new Node(prev);

    let currentNode: Node<T> = this._head;
        // 如果没有头部节点代表不没有初始化
    let insertSuccess = true;
    if (!currentNode) {
      insertSuccess =  false;
    } else {
            // 用头部节点指针一直往下走，直到找到prev节点
      while (true) {
                // 比较2个节点是否相等的方法
        const isEqual = this._isEqual(currentNode, prevNode);
        if (isEqual) {
          newNode.next = currentNode.next;
          newNode.prev = currentNode;
          currentNode.next = newNode;

                    // 判断新节点后还有没有值，有可能是在节点尾部插入的
          if (newNode.next) {
            newNode.next.prev = newNode;
          } else {
            this._tail = newNode;
          }
          this._length = this._length + 1;
          break;
        } else {
          if (currentNode.next) {
            currentNode = currentNode.next;
          } else {
            return false;
          }
        }
      }

    }
    return insertSuccess;

  }

    /**
     * 在某个节点之前插入数据
     * @param {T} val
     * @param {T} after--在节点之前插入数据
     * @param allowRepeat 是否允许重复插入，默认是true
     * @returns {boolean}
     */
  insertBefore(val: T, after: T, allowRepeat: boolean = true) {

    const newNode = new Node(val);
    if (!allowRepeat && this.checkExist(val)) {
      throw new Error(`插入的值:【${JSON.stringify(val)}】已经存在`);
    }
        // 构建一个伪节点用于比较值，或者通过这个值去找节点
    const afterNode = new Node(after);
    let insertSuccess = true;
    let currentNode: Node<T> = this._tail;
        // 如果没有头部节点代表不没有初始化
    if (!currentNode) {
      insertSuccess =  false;
    } else {
            // 用头部节点指针一直往上走，直到找到prev节点
      while (true) {
                // 比较2个节点是否相等的方法
        const isEqual = this._isEqual(currentNode, afterNode);
        if (isEqual) {
          newNode.prev = currentNode.prev;
          newNode.next = currentNode;
          currentNode.prev = newNode;

                    // 判断新节点后还有没有值，有可能是在节点尾部插入的
          if (newNode.prev) {
            newNode.prev.next = newNode;
          } else {
            this._head = newNode;
          }
          this._length = this._length + 1;
          break;
        } else {
          if (currentNode.prev) {
            currentNode = currentNode.prev;
          } else {
            return false;
          }
        }
      }

    }
    return insertSuccess;

  }

    /**
     * 给定节点的值，查找节点
     * @param nodeValue
     */
  findNode(nodeValue: T): (Node<T> | boolean) {
    let toFindNode: Node<T> = new Node(nodeValue);
    let currentNode = this._head;
    let isFind = false;
    if (!currentNode) {
      return false;
    }
    while (true) {

      const isEqual = this.isEqual(toFindNode, currentNode);
      if (isEqual) {
        toFindNode = currentNode;
        isFind = true;
        break;
      } else {
        if (currentNode.next) {
          currentNode = currentNode.next;
        } else {
          break;
        }

      }

    }

    if (!isFind) {
      return false;
    }
    return toFindNode;

  }
  findNodeIndex(nodeValue: T): number {
    let toFindNode: Node<T> = new Node(nodeValue);
    let currentNode = this._head;
    let nodeIndex = -1;
    let isFind = false;
    if (!currentNode) {
      return nodeIndex;
    }

    while (true) {

      const isEqual = this.isEqual(toFindNode, currentNode);

      if (isEqual) {
        isFind = true;
        toFindNode = currentNode;
        break;
      } else {
        if (currentNode.next) {
          currentNode = currentNode.next;
        } else {
          break;
        }

      }
      nodeIndex += 1;

    }
    if (!isFind) {
      nodeIndex = -1;
    }
    return nodeIndex;

  }
  removeHead() {
    let currentNode = this._head;
    if (currentNode) {
      this._head = currentNode.next;
      currentNode.next.prev = null;
      currentNode = null;
    } else {
      throw new Error('头节点不存在');
    }
  }
  removeTail() {
    let currentNode = this._tail;
    if (currentNode) {
      this._tail = currentNode.prev;
      currentNode.prev.next = null;
      currentNode = null;
    } else {
      throw new Error('尾节点不存在');
    }
  }
  checkExist(nodeValue: T): boolean {
    let exist = false;
    if (this._length === 0) {
      exist = false;
    } else {
      let currentNode: Node<T> = this._head;
      const toFindNode: Node<T> = new Node(nodeValue);
      while (currentNode) {
        const isEqual = this._isEqual(toFindNode, currentNode);
        if (isEqual) {
          exist = true;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    return exist;
  }
  public set isEqual(func: Function) {
    this._isEqual = func;
  }
  public get isEqual() {
    return this._isEqual;
  }

}
