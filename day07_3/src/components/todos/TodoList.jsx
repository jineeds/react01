import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useSelector((state) => state.todoR);
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
