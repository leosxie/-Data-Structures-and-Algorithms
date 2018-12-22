import LinkList,{Node} from '../../core/LinkList'


let t = new LinkList(1,2,3,4);
//重新比较节点的方法
t.isEqual = function (prev:Node<number>,next:Node<number>) {
    console.log(prev.data ,next.data);
    return prev.data === next.data+1;
};

t.insert(5,2);

for(let v of t){
    console.log(v);
}