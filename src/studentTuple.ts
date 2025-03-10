/**
 * 這個函式的目的是將學生的姓名和分數正確地打印出來。
 * 你需要使用 JavaScript 的字串來將學生的姓名和分數組合成一個字串。
 *  並嘗試在參數用元組來定義
 * 範例:
 * 輸入: ['Alice', 85]
 * 輸出: 'Alice: 85%'
 */

export function printStudentInfo(student: [string, number]): string {
  // 在此實現函式
  // 使用字串模板組合姓名和分數
  return `${student[0]}: ${student[1]}%`;
}

console.log(printStudentInfo(['Alice', 85])); //Alice: 85%
