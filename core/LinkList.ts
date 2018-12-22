/**双向节点类型
 * https://github.com/sfkiwi/linked-list-typescript/blob/master/src/index.ts
 * **/
export class Node<T>{
  data:T;
  next?:Node<T>;
  prev?:Node<T>;
  constructor(value:T){
      this.data = value;
      this.next = null;
      this.prev = null;
  }

}
//双向列表
export default class LinkList<T>{
    //哨兵检测
    private _head:Node<T> = null;
    private _tail:Node<T> = null;
    private _length:number = 0;
    private _isEqual:Function = function(prevNode:Node<T>,nextNode:Node<T>){
        console.log(prevNode.data === nextNode.data);
        return prevNode.data === nextNode.data;
    };

    get head():T{
        return this._head.data;
    }
    get tail():T{
        return this._tail.data;
    }
    get length():number{
        return this._length;
    }
    //在链表的后面插入数据
    _add(data:T):void{

        let newNode = new Node(data);
        //判断头部节点是否为空
        if(!this._head){
            this._head = this._tail = newNode;
        }else{
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

    }
    constructor(...datas:T[]){
       datas.forEach((data)=>{
           this._add(data);
       });
    }

    *iterator(): IterableIterator<T> {
        let currentItem = this._head;

        while(currentItem) {
            yield currentItem.data;
            currentItem = currentItem.next
        }
    }

    [Symbol.iterator]() {
        return this.iterator();
    }
    /**
     * 在给定节点值后的节点插入一个数据
     * @param val --插入的值
     * @param prev--上一个节点的值
     */
    insert(val:T,prev:T){

         let newNode = new Node(val);

         //构建一个伪节点用于比较值，或者通过这个值去找节点
         let prevNode = new Node(prev);

         let currentNode:Node<T> = this._head;
         //如果没有头部节点代表不没有初始化
         if(!currentNode){
             return false;
         }else{
           //用头部节点指针一直往下走，知道找到prev节点
           while (true){
               if( this._isEqual(currentNode,prevNode) ){
                   newNode.next = currentNode.next;
                   newNode.prev = currentNode;
                   currentNode.next = newNode;

                   //判断新节点后还有没有值，有可能是在节点尾部插入的
                   if(newNode.next){
                       newNode.next.prev = newNode;
                   }else{
                       this._tail = newNode;
                   }
                   this._length++;
                   return true;
               }else{
                   if(currentNode.next){
                       currentNode = currentNode.next;
                   }else {
                       return false;
                   }
               }
           }

         }

    }
    public set isEqual(func:Function){
        this._isEqual = func;
    }
    public get isEqual(){
        return this._isEqual;
    }


}


