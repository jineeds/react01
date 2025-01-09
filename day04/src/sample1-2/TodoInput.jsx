import { useRef, useState } from 'react';
import './TodoInput.scss';

const TodoInput = ({ onAdd }) => {
    const [text, setText] = useState('');
    const textRef = useRef();

    const changeInput = (e) => {
        const { value } = e.target;
        // setText(e.target.value);
        setText(value);
    };
    //값 전달
    const onSubmit = (e) => {
        //이벤트 취소 -> 링크막아주기
        e.preventDefault();
        // if( text === '') return
        if (!text.trim()) return;

        onAdd(text);
        setText('');
        textRef.current.focus();
    };

    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input type="text" ref={textRef} name="" id="" value={text} onChange={changeInput} />
            {/* <input type="text"  value={text} onChange={(e) => setText(e.target.value)}/> */}
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
