const TodoItem = ({ item }) => {
    const { id, title } = item;
    return (
        <li>
            {id} / {title}
        </li>
    );
};

export default TodoItem;
