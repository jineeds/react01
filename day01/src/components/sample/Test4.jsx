import { useState } from 'react';
import './Test.scss';

const Test4 = () => {
  const [isClass, setIsClass] = useState(false);
  const add = () => {
    true;
  };
  const remove = () => {};
  const toggle = () => {};

  return (
    <>
      <div>기본형식</div>
      <div className="on">클래스 on 붙이기</div>
      <div className="show on">기본 클래스에 on 붙이기</div>
      <hr />
      <h2>위와 동일하게 나오기</h2>
      <div className={isClass ? 'on' : ''}>클래스 on 붙이기</div>
      <div className="show">show는 유지하고 , on 붙이기</div>
      <hr />
      <p>
        <button onClick={add}>add</button>
        <button onClick={remove}>remove</button>
        <button onClick={toggle}>toggle</button>
      </p>
    </>
  );
};

export default Test4;
