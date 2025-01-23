import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTodos } from '../../store/modules/todoSlice';

const TodoUl = styled.ul`
    border: 1px solid #999;
    padding: 20px;
    li {
        line-height: 40px;
        border-bottom: 1px solid #dcdcdc;
    }
`;

const TodoList = () => {
    const { data } = useSelector((state) => state.todoR);
    const dispatch = useDispatch();
    //비동기는 useEffect -> 함수호출
    useEffect(() => {
        dispatch(getTodos());
    }, []);
    //
    return (
        <TodoUl>
            {data.map((item) => (
                <TodoItem key={item.id} item={item} />
            ))}
        </TodoUl>
    );
};

export default TodoList;
