import { BubbleSort, InsertSort, SelectSort } from '../../../src/algorithm/index';
let data  = [6, 4, 5, 3, 10, 8, 7];
let sortResult =  BubbleSort.sort(data);

console.log(sortResult);

data = [6, 4, 5, 3, 3, 10, 8, 7];
sortResult =  InsertSort.sort(data);

console.log(sortResult);

data = [6, 4, 5, 3, 10, 8, 7];
sortResult =  SelectSort.sort(data);

console.log(sortResult);
