import { useCounter } from '../hooks/useCounter';

const Test3 = () => {
  const { state: cnt, onUp, onDown, setState } = useCounter(); //결과적으로 이건 함수임.
  // state를 밑에 그대로 받아와서 써야하는데, 변경하고 싶으면 state:cnt(변경이름 적용) 이렇게도 가능
  return (
    <div>
      <h2>{cnt}</h2>
      <p>
        <button onClick={onDown}>감소</button>
        <button onClick={onUp}>증가</button>
      </p>
    </div>
  );
};

export default Test3;
