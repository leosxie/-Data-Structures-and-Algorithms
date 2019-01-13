/**
 * 递归
 */
export default class Recursion{
  /**
   * 斐波拉契递归，求第n个数据的值
   * @param n
   */
  fB(n:number):number {
    if (n === 1 || n === 2) {
      return n - 1;
    }
    return this.fB(n - 1) + this.fB(n - 2);

  }
}
