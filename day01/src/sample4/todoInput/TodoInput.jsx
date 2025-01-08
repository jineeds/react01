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

  // 값 전달
  const onSubmit = (e) => {
    // 이벤트 취소 -> 링크 막아주기(js)
    e.preventDefault();
    // if (text === '') return;
    if (!text.trim()) return;
    onAdd(text);
    setText('');
    textRef.current.focus();
    // value가 연결되어 있기 떄문에 초기화됨 벨류 설정꼮 밑에!
  };
  // const onSubmit = () => {
  //   onAdd('점심시간이야');
  // };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" ref={textRef} name="" id="" value={text} onChange={changeInput} />
      {/* <input type="text" name="" id="" value={text} onChange={(e)=>setText(e.target.value)} />   한줄일 경우에 인라인으로 이렇게 써도 됨 / 근데 이런 경우는 흔하지 않음 */}
      {/* value 키 값 */}
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
