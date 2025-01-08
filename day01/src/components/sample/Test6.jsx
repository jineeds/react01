import { useRef, useState } from 'react';

const Test6 = () => {
  // 객체{}
  const [user, setUser] = useState({
    userid: '',
    pw: '',
    email: '',
  });

  // 구조분해
  const { userid, pw, email } = user;

  // 객체.키 , 객체['키']

  // const [userid, setUserid] = useState();
  // const [pw, setPw] = useState();
  // const [email, setEmail] = useState();
  const idRef = useRef();

  // const changeInput1 = (e) => {
  //   const { value, name } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  // const changeInput2 = (e) => {
  //   const { value, name } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  // const changeInput3 = (e) => {
  //   const { value, name } = e.target;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  // };
  // 위에 1,2,3 이 아래 내용으로 함축됨
  const changeInput = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onReset = () => {
    setUser({
      userid: '',
      pw: '',
      email: '',
    });
    idRef.current.focus();
    // 모두 지우고
    // 첫번 째 커서 이동
  };

  // const changeInput1 = (e) => {
  //   setUserid(e.target.value);
  // };
  // const changeInput2 = (e) => {
  //   setPw(e.target.value);
  // };
  // const changeInput3 = (e) => {
  //   setEmail(e.target.value);
  // };
  return (
    <div>
      <h2>input 여러개일때</h2>
      {/* value 꼭 써야함 userid 가 키 값임 */}
      <input type="text" onChange={changeInput} value={userid} name="userid" id="" ref={idRef} />
      <input type="text" onChange={changeInput} value={userid} name="pw" id="" ref={idRef} />
      <input type="text" onChange={changeInput} value={userid} name="email" id="" ref={idRef} />
      <button onClick={onReset}>초기화</button>
      <hr />
      <h3>userid : {user.userid}</h3>
      <h3>pw : {user.pw} </h3>
      <h3>email : {user.email} </h3>
    </div>
  );
};

export default Test6;
