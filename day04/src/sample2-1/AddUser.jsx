import { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
  const [user, setUser] = useState({
    name: '',
    addr: '',
  });
  const nameRef = useRef();

  //   구조분해
  const { name, addr } = user;

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // 추가 시 값 전달
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !addr.trim()) return;
    //이벤트 취소
    onAdd(user);
    setUser({
      name: '',
      addr: '',
    });
    nameRef.current.focus();
  };

  //   const changeInput = (e) => {
  //     const { value } = e.target;
  //     setUser(value);
  //   };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>드라마 명단 추가</h2>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" ref={nameRef} name="name" value={name} onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">주소</label>
        <input type="text" name="addr" value={addr} onChange={changeInput} />
      </p>
      <p>
        <button type="submit">추가</button>
      </p>
    </form>
  );
};

export default AddUser;
