import TodoList from '../../components/todos/TodoList';

import styled from 'styled-components';
const TodosCon = styled.div``;

const Todos = () => {
  return (
    <TodosCon>
      <div className="inner">
        <h2>일정관리(페이징처리추가)</h2>
        <TodoList />
      </div>
    </TodosCon>
  );
};

export default Todos;
