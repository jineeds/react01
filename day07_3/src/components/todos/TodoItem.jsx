import { useDispatch } from 'react-redux';
import { todosAtions } from '../../store/modules/todoSlice';

const TodoItem = ({ todo }) => {
  const { id, text, isChk } = todo;
  const dispatch = useDispatch();
  return (
    <li style={{ color: isChk ? 'red' : 'black' }}>
      <input type="checkbox" checked={isChk} onChange={() => dispatch(todosAtions.onMod(id))} />
      {id} 번 / {text}
      <button onClick={() => dispatch(todosAtions.onDel(id))}>삭제</button>
    </li>
  );
};

export default TodoItem;
