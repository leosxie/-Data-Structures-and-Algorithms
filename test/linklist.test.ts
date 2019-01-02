import LinkList, {Node, NodeProps} from '../core/LinkList'


let t = new LinkList(1,2,4,6);
test('找到了节点',()=>{
    const findNode:Node<number> = t.findNode(2) as Node<number>;
   expect(findNode.data).toBe(2);
});
test('找不到节点',()=>{
    const findNode:boolean = t.findNode(10) as boolean;
    expect(findNode).toBe(false);
});