const TodoInput = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
