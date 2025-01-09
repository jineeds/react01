// import { useState } from 'react';

const CartForm = ({ isEdit, changeInput, onSubmit, cart, textRef }) => {
  //   const [user, setUser] = useState;
  //   ({ acount: '', text: '', price: '' });

  // 구조분해
  const { text, price, acount } = cart;

  return (
    <div className="box con1">
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="">품목</label>
          <input type="text" name="text" ref={textRef} value={text} onChange={changeInput} />
        </p>
        <p>
          <label htmlFor="">가격</label>
          <input type="text" name="price" value={price} onChange={changeInput} />
        </p>
        <p>
          <label htmlFor="">수량</label>
          <input type="number" name="acount" value={acount} onChange={changeInput} />
        </p>
        <p>
          <button>{isEdit ? '수정' : ' 등록'}</button>
        </p>
      </form>
    </div>
  );
};

export default CartForm;
