/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, onClick }) {
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={() => onClick(item.key)} />
      <p className={item.done ? "has-text-grey-light" : ""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;
