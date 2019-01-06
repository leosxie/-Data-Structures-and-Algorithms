
import SingleList from '../../src/core/SingleList';
const t = new SingleList(1, 2, 4, 6);
// t.insert(3, 2);
// t.print();
t.reverseList();
t.print();
console.log(t.head.data, t.tail.data);
