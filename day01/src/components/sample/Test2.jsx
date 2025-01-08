import { useState } from 'react';

const Display = ({ ani, age }) => {
  return (
    <div>
      <h2>
        xxx가 좋아하는 동물은 {ani}, {age}살입니다.
      </h2>
    </div>
  );
};

const Animail = ({ ani, onAni, onAge }) => {
  return (
    <div>
      <h2>Animail 컴포넌트</h2>
      <label htmlFor="">동물</label>
      <input type="text" value={ani} onChange={onAni} />
      <span style={{ fontSize: 20, marginLeft: 10 }}>{ani}</span>

      <p>
        <button
          onClick={() => {
            onAge(3);
          }}
        >
          3살
        </button>
        <button
          onClick={() => {
            onAge(5);
          }}
        >
          5살
        </button>
      </p>
    </div>
  );
};

const Name = () => {
  // const[상태변수, 상태변수값일 변경하는 함수] = useState(초기값)
  const [name, setName] = useState('아무개');

  // event, evt, e 모두 같은 말
  const changeInput = (e) => {
    // const {value} = e.target
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Name 컴포넌트</h2>
      <label htmlFor="">이름</label>
      <input type="text" onChange={changeInput} />
      <span style={{ fontSize: 20, marginLeft: 10 }}>{name}</span>
    </div>
  );
};

const Test2 = () => {
  const [ani, setAni] = useState('고양이');
  const [age, setAge] = useState(10);

  // 상태값이 있는 곳에서 함수를 작성한다 80%, 반드시는 아니다.

  const onAge = (X) => {
    setAge(X);
  };

  const onAni = (e) => {
    const { vlaue } = e.target;
    setAni(value);
  };
  return (
    <div>
      <Name />
      <hr />
      <Animail ani={ani} onAni={onAni} onAge={onAge} />
      <hr />
      <Display ani={ani} age={age} />
    </div>
  );
};

export default Test2;
