import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
// import Step2 from './Step2';
// import Step3 from './Step3';
// import Step4 from './Step4';
import './style.scss';

const Main = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    addr: '',
    tel: '',
    job: '',
    email: '',
    gender: '',
    inter: '',
  });

  const [cnt, setCnt] = useState(1);
  // 값이 변하는 useState
  // cnt 값 설정

  // user.name, user[키값], user['name명'],user[name]
  const { name, age, addr, tel, job, email, gender, inter } = user;

  // 상태값이 있는 곳에서 바뀐 함수 구현 80%
  // 다음
  const onNext = () => {
    setCnt(cnt + 1);
  };
  // 이전
  const onPrev = () => {
    setCnt(cnt - 1);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // 함수영역
  /*함수영역에서 쓰고 자 할때 예시
   if(cnt === 1) {
      return <ste1 />
    }**/
  // ///////////////////////// 기준
  // jsx영역
  return (
    <div className="wrap">
      {/* &&연산자 */}
      {/* js if문을 쓸 수 없기 때문에 &&연산자를 활용해준다. */}
      {cnt === 1 && <Step1 name={name} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext} />}
      {cnt === 2 && <Step2 user={user} changeInput={changeInput} onPrev={onPrev} onNext={onNext} />}
      {cnt === 3 && <Step3 {...user} />}
      {cnt === 4 && <Step4 name={name} />}
      {/* 해석 => cnt 값이 === 숫자 와 같으면 오른쪽 애들을 보여줘라는 의미 */}
    </div>
  );
};

export default Main;
