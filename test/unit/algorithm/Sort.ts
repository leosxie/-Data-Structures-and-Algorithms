import QuickSort from '../../../src/algorithm/sort/QuickSort';
const data:number[]  = [];
const numLen = 10;
const min = 0;
const max = 1000;
console.time('gdata');
for (let i = 0; i < numLen; i++) {
  const random =  Math.round(Math.random() * (max - min + 1) + min);
  data.push(random);
}
console.timeEnd('gdata');
// console.log('before:', data);
const  qs = new QuickSort();
qs.sortWithTime(data, true);
qs.sortNew(data, true);
