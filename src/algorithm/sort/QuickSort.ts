import * as _ from 'lodash';
/***
 * 递归的快排在数据量一大的情况会出现堆栈层数过多导致调用出错
 * 需要使用尾递归优化
 */
export default class QuickSort<T>{
  // 常规的递归写法
  private sort(data:T[]):T[] {
    const arr = _.cloneDeep(data);
    console.time('quicksort');
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const pivotIndex = this.selectPivot(arr);
    const pivot = arr[pivotIndex];
    for (let i = 0; i < arr.length; i++) {
      if (pivotIndex !== i) {
        if (arr[i] >= pivot) {
          right.push(arr[i]);
        }else {
          left.push(arr[i]);
        }
      }
    }
    const sortarry = this.sort(left).concat([pivot], this.sort(right));
    return sortarry;
  }
  sortNew(adata:T[], print = false):T[] {
    const data = _.cloneDeep(adata);
    console.time('quick sort new');
    this.quickSort(data, 0, data.length - 1);
    if (print) {
      console.timeEnd('quick sort new');
    }
    return data;

  }
  private quickSort(data:T[], low, heigh) {
    let pivot;
    if (low  < heigh) {
      pivot = this.part(data, low, heigh);
      this.quickSort(data, low, pivot - 1);
      this.quickSort(data, pivot + 1, heigh);
    }else {
      return ;
    }

  }
  private sortNewPatition(a:T[], alow:number,   ahigh:number):number {
    let low = alow;
    let high = ahigh;
    // 取每个序列的第一个值作为基准值
    const pivotkey = a[low];
    while (low < high) {
      // 从序列的右边开始往左遍历，直到找到小于基准值的元素
      while (low < high && a[high] >= pivotkey) {
          high--;
      }
      // 将元素直接赋予给左边第一个，即pivotkey所在的位置
      a[low] = a[high];
          // a[high] = pivotkey;
          // 从序列的左边边开始往右遍历，直到找到大于基准值的元素
      while (high > low && a[low] <= pivotkey) {
         low++;
      }
      // 此时的a[high]<pivotkey,已经被赋予到左边，所以可以将元素赋予给a[high]
      a[high] = a[low];
     // a[low] = pivotkey;
    }
    // 最后的low是基准值所在的位置
     a[low] = pivotkey;
    return low;
  }
  // 取右侧值为比较基准
// 从左向右依次与基准比较
// 比基准小不动，left + 1
// 比基准大，将该值放置在 right 位置，将 right - 1 位置的值保存在 left 位置，right - 1
// left 和 right 相遇时停止
// 将基准放置在 left 位置，这样比基准小的值都在左侧，比基准大的值都在右侧
  private part(arr, left, right) {
    const target = arr[right];
    while (left < right) {
      if (arr[left] <= target) {
        left += 1;
      } else if (arr[left] > target) {
        arr[right] = arr[left];
        right -= 1;
        arr[left] = arr[right];
      }
    }
    arr[left] = target;
    return left;
  }
  private selectPivot(arr:T[]):number {
    const low = 0;
    const height = arr.length - 1;
    const randPivotIndex = Math.floor(Math.random() * (height - low + 1) + low);
    return randPivotIndex;
  }
  sortWithTime(data:T[], print = false) {
    console.time('quciksort');
    const sortData = this.sort(data);
    if (print) {
      console.timeEnd('quciksort');
    }
    return sortData;

  }

}
