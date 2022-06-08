import { useState, useEffect } from "react";

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

function useStorage() {
  const [items, setItems] = useState([]);
  /* 副作用を使う */
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const putItems = (items) => {
    setItems(items);
  };

  const clearItems = () => {
    setItems([]);
  };

  return [items, putItems, clearItems];
}

export default useStorage;
