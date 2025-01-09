import { useEffect, useRef, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './Todos.scss';

const Todos = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  //   const [todos, setTodos] = useState([
  //     { id: 1, text: '안녕하세요', isDone: false },
  //     { id: 2, text: '점심시간', isDone: true },
  //   ]);
  //고유번호
  const no = useRef(todos.length + 1);
  /*
        [
            {id:1, text:내용, isDone:false}
        ]
    */
  //삭제
  const onDel = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  //추가
  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text,
        isDone: false,
      },
    ]);
  };

  //수정
  const onMod = (id) => {
    setTodos(todos.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
  };

  //   수정입력값 데이터 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="Todos ">
      <h2> 일정관리 </h2>
      <TodoInput onAdd={onAdd} />
      <TodoList todos={todos} onDel={onDel} onMod={onMod} />
    </div>
  );
};

export default Todos;
