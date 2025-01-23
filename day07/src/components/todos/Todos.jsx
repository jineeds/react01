const Todos = () => {
    return (
        <div>
            <h1 style={{ fontSize: 40, fontWeight: 700 }}> 일정관리 </h1>

            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todos;
