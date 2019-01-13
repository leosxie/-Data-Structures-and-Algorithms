
import SingleList from '../../../../src/dataStructures/SingleList';
const t = new SingleList(1, 2, 3, 4, 5, 6);
// t.insert(3, 2);
// t.print();
t.reverseList(4);
t.print();
console.log(t.head.data, t.tail.data);
