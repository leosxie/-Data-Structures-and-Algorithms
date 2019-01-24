/**
 * 冒泡排序
 */
import * as _ from 'lodash';
export default class BubbleSort{
  static sort(passArray:number[], print:boolean = false):number[] {
    const arr = _.cloneDeep(passArray);

    if (arr == null || arr.length === 0) {
      return ;
    }
    const start = new Date().getTime();
    for (let i = 1; i <= arr.length - 1; i++) {
      let flag:boolean = true;
      for (let j = 0; j <= arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          BubbleSort.swap(arr,  j + 1, j);
          flag = false;
        }
      }
      if (flag) {
        break;
      }
    }
    const end = new Date().getTime();
    if (print) {
      console.log('BubbleSort排序时间：', end - start, 'ms');
    }
    return arr;
  }
  static swap(arr:number[], i:number, j:number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

}
