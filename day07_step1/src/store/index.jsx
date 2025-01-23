import { configureStore } from '@reduxjs/toolkit';
// import 사용자정의이름 from './modules/사용자Slice'
import colorReducer from './modules/colorSlice';
import counterReducer from './modules/counterSlice';
import changeColorReducer from './modules/changeColorSlice';
import countReducer from './modules/countSlice';
import todoR from './modules/todoSlice';

//리듀서 합치기 -> 게시판, 이미지, 글등록, 로그인등 slice등불러와서

export const store = configureStore({
    reducer: {
        colorR: colorReducer,
        counterR: counterReducer,
        changeColorR: changeColorReducer,
        countR: countReducer,
        todoR,
    },
});

//  내보내기는 객체나간다 연결되는 이름 키 => colorR
