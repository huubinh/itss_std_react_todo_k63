function ClearButton({ clearList }) {
  return (
    <label className="panel-block">
      <button
        className="button is-light is-fullwidth"
        onClick={() => clearList()}
      >
        全てのToDoを消除
      </button>
    </label>
  );
}

export default ClearButton;
