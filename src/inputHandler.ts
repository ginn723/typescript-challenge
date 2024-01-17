/**
 * 這個函式的目的是根據輸入的類型返回對應的描述。
 * 你需要使用 TypeScript 的聯合類型來定義輸入可以是字串或數字，並在函式中返回對應的描述。
 * 函式的返回值應該是一個字串，這個字串描述了輸入的類型和值。
 *
 * 範例:
 * 輸入: 'Hello'
 * 輸出: 'Input is a string: Hello'
 *
 * 輸入: 123
 * 輸出: 'Input is a number: 123'
 */

export function handleInput(input: string | number): string {
  // 在此實現函式
  // 使用 typeof 運算符來判斷輸入的類型
  if (typeof input === 'string') {
    return `Input is a string: ${input}`;
  } else if (typeof input === 'number') {
    return `Input is a number: ${input}`;
  } else {
    // 如果輸入的類型不是字串或數字，返回相應的錯誤訊息
    throw new Error('Invalid input type');
  }
}
