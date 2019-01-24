import { BubbleSort, InsertSort, SelectSort } from '../../../src/algorithm/index';
const data  = [];
const numLen = 10000;
const min = 1;
const max = 100000;
for (let i = 0; i < numLen; i++) {
  const random =  Math.round(Math.random() * (max - min + 1) + min);
  data.push(random);
}
BubbleSort.sort(data, true);
InsertSort.binarySearchInsertSort(data, true);
InsertSort.sort(data, true);
InsertSort.sort1(data, true);
InsertSort.shellSort(data, true);
SelectSort.sort(data, true);
