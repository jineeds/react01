import { createSlice } from '@reduxjs/toolkit';
import Todos from '../../components/todos/Todos';
//api -> todoData.js를 불러오기
// 포폴할떄 편하게 할 경우 => 데이터 저장소를 따로 만들어서 깃 주소 불러오기.
// 이미지 경로 문제 => 이미지 저장소를 깃 올린 다음 주소 복사해서 api 저장해서 사용하는 것을 권장
import dataList from '../../assets/api/todoData';

const initialState = {
  todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : dataList,
  text: '',
};

// let no = todos.length + 1;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    onAdd: (state, text) => {
      // push 가능 => 원본이 변경된다 js array 성격
      // push : toolikt 에서 관리한다 => 불변성 유지 처리해준다.
      //   state.todos = state.todos.push({ id: no++, text: text, isChk: false });
      state.todos = [...state.todos, { id: no++, text: action.payload, isChk: false }];
    },
    onDel: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify);
    },
    // 방법1
    onMod1: (state, action) => {
      state.todos.map((todo) => (todo.id === action.payload ? { ...todo, isChk: !isChk } : todo));
    },
    onMod: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.isChk = !todo.isChk;
    },
    changeInput: (state, action) => {
      state.text = action.payload;
    },
  },
});
// export const { 함수 } = todosSlice.actions;
export const todosAtions = todosSlice.actions;
export default todosSlice.reducer;
