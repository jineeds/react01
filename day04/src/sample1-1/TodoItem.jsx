const TodoItem = ({ item, onDel, onMod }) => {
    const { id, text, isDone } = item;
    return (
        <li className={isDone ? 'on' : ''}>
            <span onClick={() => onMod(id)}>✓</span>
            <em>{text}</em>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;
