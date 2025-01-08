import { useRef, useState } from 'react';

const FriendInput = ({ onAdd }) => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    image: '',
  });

  const nameRef = useRef();
  const { name, age, image } = user;

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //   값 전달
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !image.trim()) return;
    setUser({
      name: '',
      age: '',
      image: '',
    });

    onAdd(user);
    nameRef.current.focus();
    //  onAdd1(name, age, image);
  };

  return (
    <form className="formadd" onSubmit={onSubmit}>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" name="name" value={name} onChange={changeInput} id="" ref={nameRef} />
      </p>
      <p>
        <label htmlFor="">나이</label>
        <input type="text" name="age" value={age} onChange={changeInput} id="" />
      </p>
      <p>
        <label htmlFor="">사진</label>
        <input type="text" name="image" value={image} onChange={changeInput} id="" />
      </p>
      <p>
        <button type="submit">등록</button>
      </p>
    </form>
  );
};

export default FriendInput;
