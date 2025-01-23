import { createSlice } from '@reduxjs/toolkit';
import Todos from '../../components/todos/Todos';
//api -> todoData.js를 불러오기
const dataList = [
  { id: 1, text: '홍길동', isChk: false },
  { id: 2, text: '전지현', isChk: true },
  { id: 3, text: '송혜교', isChk: false },
  { id: 4, text: '박연진', isChk: false },
  { id: 5, text: '이도현', isChk: false },
];
const initialState = {
  todos: dataList,
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
