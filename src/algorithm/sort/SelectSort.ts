/**
 * 选择排序o(n2) 用的少
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
   再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
   选择排序每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，这样破坏了稳定性
  （1）选择排序是最机械的一种排序，在排序的过程中完全不考虑原始序列的任何排序情况，只是机械的从剩余的序列中选择出最大/最小的元素，
    无论初始序列是什么样的排列方式，选择排序都得经过N(N-1)/2次比较。
   2）插入排序的时间跟原始序列的排序方式有关，最差的情况是原始序列完全倒序，需要N(N-1)/2次比较；
   最好的情况是原始序列完全正序，时间复杂度只需要N次比较；平均下来显然插入排序要快一点。
   交换数据比比较数据所需要的时间多很多

 */
import * as _ from 'lodash';
export default class SelectSort{
  static sort(passArray:number[], print:boolean = false) {
    const arr = _.cloneDeep(passArray);
    if (arr.length <= 1) return;
    const start = new Date().getTime();
    // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j; // 找到整个数组的最小值
        }
      }
      // 防止自己和自己交换
      if (i !== minIndex) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }

    }
    const end = new Date().getTime();

    if (print) {
      console.log('SelectSort 排序时间：', end - start, 'ms');
    }
    return arr;
  }
}
