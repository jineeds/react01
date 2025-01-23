import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useSelector((state) => state.todosR);
  return (
    <ul>
      <TodoItem />

      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
