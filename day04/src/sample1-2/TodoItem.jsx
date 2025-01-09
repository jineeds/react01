const TodoItem = ({ item, onDel, onMod }) => {
    const { id, text, isDone } = item;
    return (
        <li className={isDone ? 'on' : ''}>
            <div>
                <input type="checkbox" />
                <p>
                    <em> {text} </em>
                    <button>수정</button>
                </p>

                {/* <p>
                    <input type="text" />
                    <button>저장</button>
                </p> */}
            </div>
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;
