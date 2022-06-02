/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ activeTab, filterItems }) {
  return (
    <div className="panel-tabs">
      <a
        href="/#"
        className={activeTab === 0 ? "is-active" : ""}
        onClick={() => filterItems(0)}
      >
        すべて
      </a>
      <a
        href="/#"
        className={activeTab === 1 ? "is-active" : ""}
        onClick={() => filterItems(1)}
      >
        未完了
      </a>
      <a
        href="/#"
        className={activeTab === 2 ? "is-active" : ""}
        onClick={() => filterItems(2)}
      >
        完了済み
      </a>
    </div>
  );
}

export default Filter;
