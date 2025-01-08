import { useRef, useState } from 'react';
import TodoInput from '../todoInput/TodoInput';
import TodoList from '../todoList/TodoList';
import './Todos.scss';

const Todos = () => {
  const [data, setData] = useState([
    { id: 1, text: '안녕하세요', isDone: false },
    { id: 2, text: '안녕히가세요', isDone: true },
  ]);
  /* 데이터는 이렇게 넣음
  [{id:1, text:내용, isDone:false}]
  */

  // 고유번호
  const no = useRef(data.length + 1);

  // 삭제 filter
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // 추가
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text, isDone: false }]);
  };

  // 수정
  const onMod = (id) => {
    setData(data.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
  };
  // 체크박스 눌렀을때 true 로 표시 and false(!item.isDone)
  // !가 무슨역할인지 체크

  return (
    <div className="Todos">
      <h2>일정관리</h2>
      <TodoInput onAdd={onAdd} />
      <TodoList data={data} onDel={onDel} onMod={onMod} />
    </div>
  );
};

export default Todos;
