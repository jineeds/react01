import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosAtions } from '../../store/modules/todoSlice';

const TodoInput = () => {
  //   const [text, setText] = useState('');
  const { text } = useSelector((state) => state.todoR);
  const disptch = useDispatch();
  //slice아닌 내용에서 chageInput 처리를 추천

  const onSubmit = (e) => {
    e.preventDefault();
    disptch(todosAtions.onAdd(text));
    disptch(todosAtions.changeInput());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          disptch(todosAtions.changeInput(e.target.value));
        }}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
