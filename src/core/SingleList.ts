/**
 * 单链表的实现
 */
export class SingleNode<T> {
  data: T;
  next?: SingleNode<T>;
  constructor(value: T) {
    this.data = value;
    this.next = null;
  }
}
export interface SingleNodeProps<T>{
  data: T;
  next: SingleNode<T>;
}

export default class SingleNodeList<T>{
  private _head: SingleNode<T> = null;
  private _tail: SingleNode<T> = null;
  private _length: number = 0;
  public get head() {
    return this._head;
  }
  public get tail() {
    return this._tail;
  }
  public get length() {
    return this._length;
  }

  private _add(data:T): void {
    const newNode = new SingleNode(data);
    if (!this._head) {
      this._head = this._tail = newNode;
    }else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
    this._length = this._length + 1;
  }
  private _isEqual: Function = function (prevNode: SingleNode<T>, nextNode: SingleNode<T>) {
    return prevNode.data === nextNode.data;
  };
  constructor(...datas:T[]) {
    datas.forEach((data) => {
      this._add(data);
    });
  }
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
  checkExist(nodeValue: T): boolean {
    let exist = false;
    if (this._length === 0) {
      exist = false;
    } else {
      let currentNode: SingleNode<T> = this._head;
      const toFindNode: SingleNode<T> = new SingleNode(nodeValue);
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
    /**
     * 在给定节点值后的节点插入一个数据
     * @param val --插入的值
     * @param prev--上一个节点的值-要在这个节点之后插入数据
     * @param allowRepeat 是否允许重复插入，默认是true
     */
  insert(val: T, prev: T, allowRepeat: boolean= true):boolean {

    const newNode = new SingleNode(val);
    if (!allowRepeat && this.checkExist(val)) {
      throw new Error(`插入的值:【${JSON.stringify(val)}】已经存在`);
    }
          // 构建一个伪节点用于比较值，或者通过这个值去找节点
    const prevNode = new SingleNode(prev);

    let currentNode: SingleNode<T> = this._head;
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
          // 插入新节点
          newNode.next = currentNode.next;
          currentNode.next = newNode;
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
   * @param type:number 反转的类型 1代表使用就地反转 2 代表使用新建链表插入反转
   *  */
  reverseList(type:number = 1) {
    if (type === 1) {
      this._LocalReverse();
    }else {
      this._newListReverse();
    }
  }
  /**
   * 就地反转单链
   * headPrevNode 在头节点之前构建一个空节点用于指向头节点
   * preNode 待反转节点的前一个节点
   * reverseNode 要发转的节点
   * 当要反转的节点为空的时候，就代表反转完成
   * 第一个节点就是头节点
   * 反转的第一个节点就是反转后的尾节点
   */
  private _LocalReverse() {
// 在头节点之前构建一个节点用于后续转换使用
    const headPrevNode:SingleNode<any> = new SingleNode(-1);
    const currentNode = this._head;
    if (currentNode !== null) {
      headPrevNode.next = currentNode;
      this._tail = currentNode;
      const preNode = headPrevNode.next;
      let reverseNode = preNode.next;
      while (reverseNode != null) {
        preNode.next = reverseNode.next;
        reverseNode.next = headPrevNode.next;
        headPrevNode.next = reverseNode;
        reverseNode = preNode.next;
      }
      // 头节点回归
      this._head = headPrevNode.next;
    }
  }
  /**
   * 新建链表插入反转
   */
  private _newListReverse() {
    const a = 2;
    console.log(a);
  }

}
