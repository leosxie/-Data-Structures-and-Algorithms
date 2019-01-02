import LinkList, {Node, NodeProps} from '../../src/core/LinkList'


let t = new LinkList(1,2,4,6);
//重新比较节点的方法
t.isEqual = function (prev:Node<number>,next:Node<number>) {

    return prev.data === next.data;
};
t.print();
