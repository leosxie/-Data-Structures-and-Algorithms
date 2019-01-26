import { InsertSort } from '../../../src/algorithm/index';
const data  = [];
const numLen = 100000;
const min = 100;
const max = 10000;
console.time('gdata');
for (let i = 0; i < numLen; i++) {
  const random =  Math.round(Math.random() * (max - min + 1) + min);
  data.push(random);
}
console.timeEnd('gdata');
InsertSort.sort(data, true);
InsertSort.shellSort(data, true);
