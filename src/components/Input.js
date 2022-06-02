import React, { useState } from "react";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ addNewItem }) {
  const [input, setInput] = useState({});

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Todoを入力してください"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addNewItem(input);
            setInput("");
          }
        }}
      />
    </div>
  );
}

export default Input;
