/**
 * 待辦事項介面已被移除，你需要自己定義一個新的待辦事項介面。
 * 待辦事項介面應該包含 id、task 和 completed 三個屬性，分別為數字型別、字串型別和布林型別。
 */

/**
 * 新增待辦事項
 * @param todos - 現有的待辦事項陣列
 * @param task - 新的待辦事項的內容
 *
 * 範例:
 * 輸入: ([{ id: 1, task: 'Buy milk', completed: false }], 'Walk the dog')
 * 輸出: [{ id: 1, task: 'Buy milk', completed: false }, { id: 2, task: 'Walk the dog', completed: false }]
 */

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export function addTodo(todos: Todo[], task: string): Todo[] {
  // 在此實現函式
  // 獲取目前最大的 ID
  const maxId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 0;

  // 新增代辦事項，ID +1
  const newTodo: Todo = { id: maxId + 1, task, completed: false };

  //   return [...todos, newTodo];

  // 返回新的待辦事項陣列
  const updatedTodos = [...todos, newTodo];

  // 使用 console.log 輸出新增後的待辦事項陣列
  console.log('Updated Todos:', updatedTodos);

  return updatedTodos;
}
