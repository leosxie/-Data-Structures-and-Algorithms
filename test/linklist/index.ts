import LinkList, {Node, NodeProps} from '../../core/LinkList'


let t = new LinkList(1,2,4,6);
//重新比较节点的方法
t.isEqual = function (prev:Node<number>,next:Node<number>) {

    return prev.data === next.data;
};

t.insert(5,4);
t.insertBefore(0,1);

t.print((node:NodeProps<number>)=>{
   console.log( 'hello:',node.data );
});
console.log(t.head,t.tail);
