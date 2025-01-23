const TodoItem = ({ todo }) => {
  const { id, text, inChk } = todo;
  return (
    <li style={{ color: '#000' }}>
      <input type="checkbox" checked={inChk} />
      {id} 번/ {text}
      {/* {id} 번 / {text} */}
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
