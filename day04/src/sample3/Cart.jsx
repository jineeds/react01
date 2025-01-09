import './style.scss';
import CartForm from './CartForm';
import CartList from './CartList';
import { useEffect, useRef, useState } from 'react';

const dataList = [
  { id: 1, text: '인형', price: 10000, acount: 3 },
  { id: 2, text: '곰돌이', price: 10000, acount: 4 },
  { id: 3, text: '호랑이', price: 10000, acount: 6 },
  { id: 4, text: '토끼', price: 10000, acount: 2 },
];

const Cart = () => {
  //{id:1, text:xxxx , price:10000 , amount:3}
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  //   처음엔 false 적용
  const [cart, setCart] = useState({ text: '', acount: 0, price: 0 });
  // 포커스 설정
  const textRef = useRef();

  const { text, price, acount } = cart;
  //   고유번호

  const no = useRef(data.length + 1);

  // 삭제 filter
  const onDel = (id) => {
    const newItem = data.filter((item) => item.id !== id);
    setData(newItem);
  };

  //   수정 버튼 클릭시 수정 해야할 값이 나오는
  const onEdit = (id) => {
    //find 이용
    setCart(data.find((item) => item.id === id));
    setIsEdit(true);
    // setIsEdit(!isEdit);
  };

  // 수정내용 업데이트
  //   const onUpdate = () => {};

  // C폼부분 = 추가, 수정
  const onSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      //   수정;
      //   map
      setData(data.map((item) => (item.id === cart.id ? cart : item)));
      setCart({ text: '', price: '', acount: 0 });
      setIsEdit(true);
    } else {
      //   등록;
      setData([...data, { id: no.current++, ...cart }]);
      //   cart.id = no.current++; setData([...data, cart])
      //   초기화
      setCart({ text: '', acount: 0, price: 0 });
      // 포커스 (입력후 초기 칸으로 아무것도 없이 커서만 보이게)
      textRef.current.focus();
    }
    // 해당객체 총가격
    cart.total = Number(price * acount);
  };
  // 글자 입력
  const changeInput = (e) => {
    const { name, value } = e.target;
    setCart({ ...cart, [name]: value });
  };
  //   //   추가

  //   const onAdd = (user) => {
  //     setData([...data, { id: no.current++, ...user }]);
  //   };

  // 가격변경이 되면 총금액 변경 => 체크 useEffect
  useEffect(() => {
    /*arr.reduce(callback[, initialValue])*/
    /**누산기 (acc)
    현재 값 (cur) */
    /*arr.reduce((acc, cur)=>{
        return acc + cur }, 초기값)*/

    setSum(
      data.reduce((acc, cur) => {
        return acc + cur.total;
      }, 0)
    );
  }, [data]);
  return (
    <>
      <div className="con-box">
        <CartForm
          IsEdit={isEdit}
          cart={cart}
          changeInput={changeInput}
          onSubmit={onSubmit}
          text={text}
          price={price}
          acount={acount}
          textRef={textRef}
        />
        <CartList data={data} onDel={onDel} onEdit={onEdit} sum={sum} />
      </div>
    </>
  );
};

export default Cart;
