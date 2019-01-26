/**
 * 局部有序的数组很适合插入排序
 * 插入排序
 */
import * as _ from 'lodash';
export default class InsertSort{
  /**
   * 直接插入排序for循环版本
   * @param passArray
   * @param print 是否打印执行时间
   */
  static sort(passArray:number[], print:boolean = false) {
    const arr = _.cloneDeep(passArray);
    if (arr.length < 2) {
      return arr;
    }
    const start = new Date().getTime();
    for (let i = 1; i < arr.length; i++) {
      // console.log('i: ', i);
      const temp = arr[i];
      let j = i - 1;
      for (; j >= 0 && arr[j] > temp; j--) {
        arr[j + 1] = arr[j];
      }
      if (i !== j + 1) {
        arr[j + 1] = temp;
      }

    }
    const end = new Date().getTime();
    if (print) {
      console.log('InsertSort sort', end - start, 'ms');
    }
    return arr;
  }
  /**
   * 直接插入循环while循环
   * @param passArray
   * @param print
   */
  static sort1(passArray:number[], print:boolean = false) {
    const arr = _.cloneDeep(passArray);
    if (arr.length < 2) {
      return arr;
    }
    const start = new Date().getTime();
    for (let i = 1; i < arr.length; i++) {
      // console.log('i: ', i);
      const temp = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
      // console.log(arr);
    }
    const end = new Date().getTime();
    if (print) {
      console.log('InsertSort sort1 排序时间：', end - start, 'ms');
    }
    return arr;
  }
  /**
   * 二分查找插入排序
   * 从第一个元素开始，该元素可以认为已经被排序；
    取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置；
    将新元素插入到该位置后；
    重复上述两步
   * @param arr
   */
  static binarySearchInsertSort(passArray:number[], print:boolean = false) {
    const arr = _.cloneDeep(passArray);
    const start = new Date().getTime();
    for (let i = 1; i < arr.length; i++) {
      const key:number = arr[i];
      let left:number = 0; // 最低区间
      let  right:number = i - 1; // 最高区间
      while (left <= right) {
        // 取中间位置
        const middle = parseInt(`${(left + right) / 2}`, 10);
        // 如果取的值小于中间位置的值，就缩小最高区间，相反就提高最低区间位置
        if (key < arr[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }

      // 移动数据，以最低区间为准
      for (let j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
      }
      // 把数据放到最低区间的位置
      arr[left] = key;
    }
    const end = new Date().getTime();
    if (print) {
      console.log('binarySearchInsertSort排序时间：', end - start, 'ms');
    }
    return arr;
  }
  /**
   * 希尔排序-增量排序
   * @param passArray
   */
  static shellSort(passArray:number[], print:boolean = false) {
    const arr:number[] = _.cloneDeep(passArray);
    const start = new Date().getTime();
    // 步长
    const step = 3;
    let gap = Math.round(arr.length / step);

    for (; gap > 0; gap = Math.round(gap / step)) {

      for (let i = gap; i < arr.length; i++) {
        let j = i;
        const temp = arr[j];
        if (arr[j] < arr[j - gap]) {
          while (j - gap >= 0 && temp < arr[j - gap]) {
            arr[j] = arr[j - gap];
            j -= gap;
          }
          arr[j] = temp;
        }
      }

    }
    const end = new Date().getTime();

    if (print) {
      console.log('shellSort排序时间：', end - start, 'ms');
    }
    return arr;

  }
}
