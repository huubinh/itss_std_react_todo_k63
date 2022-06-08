import React, { useState, useEffect } from "react";

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";
import ClearButton from "./ClearButton";
/* カスタムフック */
import useStorage from "../hooks/storage";

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage();
  const [activeTab, setActiveTab] = useState(0);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    filterItems(activeTab);
    //eslint-disable-next-line
  }, [items]);

  function onItemClicked(key) {
    const newItemList = items.map((item) =>
      item.key === key ? { ...item, done: !item.done } : item
    );
    const newDisplayedItemList = displayedItems.map((item) =>
      item.key === key ? { ...item, done: !item.done } : item
    );
    putItems(newItemList);
    setDisplayedItems(newDisplayedItemList);
  }

  function addNewItem(newText) {
    const newItemList = [
      ...items,
      { key: getKey(), text: newText, done: false },
    ];
    putItems(newItemList);
  }

  function filterItems(activeTab) {
    setActiveTab(activeTab);
    if (activeTab === 0) setDisplayedItems(items);
    else if (activeTab === 1) {
      const newDisplayedItems = items.filter(
        (displayedItem) => displayedItem.done === false
      );
      setDisplayedItems(newDisplayedItems);
    } else {
      const newDisplayedItems = items.filter(
        (displayedItem) => displayedItem.done === true
      );
      setDisplayedItems(newDisplayedItems);
    }
  }

  function clearList() {
    setDisplayedItems([]);
    clearItems();
  }

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input addNewItem={addNewItem} />
      <Filter activeTab={activeTab} filterItems={filterItems} />
      {displayedItems.map((item) => (
        <TodoItem key={item.key} item={item} onItemClicked={onItemClicked} />
      ))}
      <div className="panel-block">{displayedItems.length} items</div>
      <ClearButton clearList={clearList} />
    </div>
  );
}

export default Todo;
