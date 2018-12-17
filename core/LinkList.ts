/**双向节点类型**/
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

    get head():T{
        return this._head.data;
    }
    get tail():T{
        return this._tail.data;
    }
    get lenght():number{
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
    //插入一个节点
    insert(node:T,prev:T){

    }


}
