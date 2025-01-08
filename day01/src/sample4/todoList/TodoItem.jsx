const TodoItem = ({ item, onDel, onMod }) => {
  const { id, text, isDone } = item;
  return (
    <li className={isDone ? 'on' : ''}>
      <span
        onClick={() => {
          onMod(id);
        }}
      >
        ✓
      </span>
      <em>{text}</em>
      <button onClick={() => onDel(item.id)}>삭제</button>
      {/* (id)키 값 - 실제 데이터 삭제하는 키 값 */}
    </li>
  );
};

export default TodoItem;
