import LinkList, {Node, NodeProps} from '../../core/LinkList'


let t = new LinkList(1,2,3,4);
//重新比较节点的方法
t.isEqual = function (prev:Node<number>,next:Node<number>) {

    return prev.data === next.data+1;
};

t.insert(5,2);

t.print((node:NodeProps<number>)=>{
   console.log( 'hello:',node.data );
});
