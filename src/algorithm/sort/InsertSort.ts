/**
 * 插入排序
 * 插入排序是在一个已经有序的小序列的基础上，一次插入一个元素。当然，刚开始这个有序的小序列只有1个元素，也就是第一个元素（默认它有序）。
比较是从有序序列的末尾开始，也就是把待插入的元素和已经有序的最大者开始比起，如果比它大则直接插入在其后面。
否则一直往前找直到找到它该插入的位置。如果遇见一个与插入元素相等的，那么把待插入的元素放在相等元素的后面。
所以，相等元素的前后顺序没有改变，从原无序序列出去的顺序仍是排好序后的顺序，所以插入排序是稳定的。
 */
export default class InsertSortInsertSort{
  static sort(arr:number[]) {
    if (arr.length < 2) {
      return arr;
    }

    for (let i = 1; i < arr.length; i++) {
      // console.log('i: ', i);
      const temp = arr[i];
      let j = i - 1;
      for (; j >= 0; j--) {
        if (arr[j] > temp) {
          arr[j + 1] = arr[j];
        }else {
          break;
        }
      }
      arr[j + 1] = temp;
    }
    return arr;
  }
  static sort1(arr:number[]) {
    if (arr.length < 2) {
      return arr;
    }

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
    return arr;
  }
}
