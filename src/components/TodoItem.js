/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, onItemClicked }) {
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => onItemClicked(item.key)}
      />
      <p className={item.done ? "has-text-grey-light" : ""}>{item.text}</p>
    </label>
  );
}

export default TodoItem;
