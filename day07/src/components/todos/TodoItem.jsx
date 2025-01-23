const TodoItem = () => {
    return (
        <li style={{ color: '#000' }}>
            <input type="checkbox" />
            {id} 번 / {text}
            <button>삭제</button>
        </li>
    );
};

export default TodoItem;
