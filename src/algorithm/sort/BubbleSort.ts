/**
 * 冒泡排序
 */
export default class BubbleSort{
  static sort(arr:number[]):number[] {
    if (arr == null || arr.length === 0) {
      return ;
    }
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
    return arr;
  }
  static swap(arr:number[], i:number, j:number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

}
