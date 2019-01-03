
import LinkList, { Node } from '../../src/core/LinkList';
const t = new LinkList(1, 2, 4, 6);
// 重新比较节点的方法
t.isEqual = function (prev:Node<number>, next:Node<number>) {

  return prev.data === next.data;
};
t.insert(1, 2, false);
