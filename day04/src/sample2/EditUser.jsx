import { useEffect, useState } from 'react';

const EditUser = ({ current, onUpdate, setEdit }) => {
  const [user, setUser] = useState(current);
  const { id, name, addr } = user;

  //   useEffect(() => { 마운트(처음실행), 업데이트 수정} 의존성);
  useEffect(() => {
    setUser(current);
  }, [current]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !addr.trim()) return;
    onUpdate(user);
    setUser({ name: '', addr: '' });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>드라마 명단 수정</h2>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" name="name" value={name} onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">주소</label>
        <input type="text" addr="addr" value={addr} onChange={changeInput} />
      </p>
      <p>
        <button type="submit">수정</button>
        <button onClick={() => setEdit(false)}>취소</button>
      </p>
    </form>
  );
};

export default EditUser;
