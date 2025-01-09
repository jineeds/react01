import TodoItem from './TodoItem';
import './TodoList.scss';
const TodoList = ({ todos, onDel, onMod }) => {
  return (
    <ul className="TodoList">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} onDel={onDel} onMod={onMod} />
      ))}
    </ul>
  );
};

export default TodoList;
