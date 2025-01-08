const Panda1 = ({ ani1 }) => {
  // 구조분해
  const { name } = ani1;
  return (
    <div>
      <h2>컴포넌트 : 판다 1</h2>
    </div>
  );
};

// 여기서부터
const Panda2 = ({ name }) => {
  return (
    <div>
      <h2>컴포넌트 : {name}</h2>
    </div>
  );
};

const Panda3 = ({ ani3: { name } }) => {
  return (
    <div>
      <h2>컴포넌트 : {name}</h2>
    </div>
  );
};
// 새 형태가 가장 많이 쓰임
const Bird = ({ name }) => {
  return (
    <div>
      <h2>컴포넌트 : {name}</h2>
    </div>
  );
};
// 여기서까지 많이 쓰임

const Cat = (props) => {
  // 구조분해, 비구조할당
  // const props = {name : "xxx"}
  const { name } = props;
  return (
    <div>
      <h2>컴포넌트 : {name}</h2>
    </div>
  );
};

// props 객체
const Dog = (props) => {
  // props  = {name : " 푸들강아지"}
  return (
    <div>
      <h2>컴포넌트 : {props.name}</h2>
    </div>
  );
};

const Test1 = () => {
  const ani1 = { name: '판다1' };
  const ani2 = { name: '판다2' };
  const ani3 = { name: '판다3' };

  return (
    <div>
      <Dog name="설이" />
      <hr />
      <Cat name="호야" />
      <hr />
      <Bird name="부엉쓰" />
      <hr />
      {/* name은 변수처럼 생각- 키값? */}
      <Panda1 ani1={ani1} />
      <hr />
      {/* 스프레드 연산자 많이쓰임 예시 ...값 */}
      <Panda2 {...ani2} />
      <hr />
      <Panda3 ani3={ani3} />
    </div>
  );
};

export default Test1;
