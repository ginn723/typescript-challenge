/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 *
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 *
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 *
 * 輸入: []
 * 輸出: 0
 */
export function arraySum(numbers: number[]): number {
  // 在此實現函式
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 這個函式使用了 reduce 方法，這個方法將一個累加器函式應用於陣列的每個元素，
// 將陣列歸納為一個單一的值。在這裡，sum 是累加器，num 是當前處理的陣列元素，
// 0 是初始值。這樣的累加操作最終返回了數字陣列的總和。
