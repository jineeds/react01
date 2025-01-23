import { createSlice } from '@reduxjs/toolkit';
const dataList = [
  {
    id: 1,
    text: '홍길동',
    inChk: false,
  },
  {
    id: 2,
    text: 'xxx',
    inChk: true,
  },
  {
    id: 3,
    text: 'ddd',
    inChk: false,
  },
  {
    id: 4,
    text: 'fff',
    inChk: false,
  },
  {
    id: 5,
    text: 'ggg',
    inChk: false,
  },
];

const initialState = {
  todos: dataList,
  text: '',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    onAdd: (state, action) => {
      //action.payload -> 값을 받아오기
    },
    onDel: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      //action.payload -> 값을 받아오기
    },
    onMod: (state, action) => {
      //action.payload -> 값을 받아오기
    },
    changeInput: (state, action) => {},
  },
});
export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
