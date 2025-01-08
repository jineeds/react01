import { useRef } from 'react';

const Test5 = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef();

  const onReset = () => {
    // Dom접근
    ref1.current.style.backgroundColor = 'red';
    ref1.current.style.fontSize = '30px';
    ref1.current.style.padding = '5px 10px';
    ref3.current.focus();
  };
  return (
    <div>
      <h1 ref={ref1}>호엥</h1>
      <h1 ref={ref2}>호엥</h1>
      <input type="text" ref={ref3} />
      <button onClick={onReset}>호잇</button>
    </div>
  );
};

export default Test5;

// const ref = useRef(initialValue)
// useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.

// Dom 직접 연결
// const 참조 변수 = useReft(null)
// 값 변경
// 참조변수.current.xxx
// <태그 ref객체 = {참조변수}
// 숫자값 유지
// const 변수 = useRef(숫자)

// 사용예
// 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
// 애니메이션을 직접적으로 실행시킬 때.
// 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
