import TodoItem from './TodoItem';
import './TodoList.scss';

// map
// {배열이름.map ((item, index)) => 반복코드}

const TodoList = ({ data, onDel, onMod }) => {
  return (
    <div className="TodoList">
      {data.map((item) => (
        <TodoItem key={item.id} item={item} onDel={onDel} onMod={onMod} />
      ))}
    </div>
  );
};

export default TodoList;
