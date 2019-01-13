/**
 * 递归
 */

 // 定义楼梯每次只能走一步还是2步，然后给定一个楼梯的的阶梯数，看几步能走完

export default class Recursion{
  /**
   * 斐波拉契递归，求第n个数据的值，
   * 也可以和下面走楼梯的一样实现一个缓存
   * @param n
   */
  static fB(n:number):number {
    if (n === 1 || n === 2) {
      return n - 1;
    }
    return this.fB(n - 1) + this.fB(n - 2);

  }
  static fBNotRecursion(n:number):number {
    if (n === 1 || n === 2) {
      return n;
    }
    return 0;
  }
  // 是否已经结算
  private static hasCal:{
    [k:string]:number,
  } = {};
  static stairsRecursion(n:number) :number {
    if (n === 1 || n === 2) {
      return n;
    }
    // 重复计算的问题
    if (this.hasCal[`${n}`]) {
      return this.hasCal[n];
    }
    return this.stairsRecursion(n - 1) + this.stairsRecursion(n - 2);
  }
  /**
   * 非递推实现走楼梯
   * @param n
   */
  static stairsNotRecursion(n:number) :number {
    if (n === 1 || n === 2) {
      return n;
    }
    let ret = 0; // 一共有多少种走法
    let prePre = 1; // 第一种是走1步开始
    let pre = 2; // 另外一种是第一次走2步
    let startPo = 3;
    while (true) {

      ret = pre + prePre; // 存储上一次的方法数量
      prePre = pre; // 改变走法
      pre = ret; // 把上一次的置为下一步

      startPo = startPo + 1;
      if (startPo > n) {
        break;
      }
    }
    return ret;
  }
}
