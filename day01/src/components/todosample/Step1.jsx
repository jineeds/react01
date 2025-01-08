import { useState } from 'react';

const Step1 = ({ name, age, addr, tel, changeInput, onNext }) => {
  return (
    <>
      <p>
        <label htmlFor="">이름</label>
        <input type="text" name="name" value={name} id="" onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">나이</label>
        <input type="text" name="age" value={age} id="" onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">주소</label>
        <input type="text" name="addr" value={addr} id="" onChange={changeInput} />
      </p>
      <p>
        <label htmlFor="">연락처</label>
        <input type="text" name="tel" value={tel} id="" onChange={changeInput} />
      </p>
      <p>
        <button onClick={onNext}>다음</button>
      </p>
    </>
  );
};

export default Step1;
