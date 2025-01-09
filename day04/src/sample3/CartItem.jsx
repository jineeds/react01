import { FaTrashAlt } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
const CartItem = ({ item, onDel, onEdit }) => {
  const { acount, text, price, id } = item;
  return (
    <li>
      <p>
        <span>품목</span>:<strong>{text}</strong>
      </p>
      <p>
        {/* 천단위 자바스크립트로 toString~ 이거는 챗한테 물어봐서 적용하기 */}
        <span>가격</span>:<strong>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</strong>
      </p>
      <p>
        <span>수량</span>:<strong>{acount}개</strong>
      </p>
      <p>
        <button
          onClick={() => {
            onEdit(id);
          }}
        >
          <i className="수정">
            <FaPen />
          </i>
        </button>
        <button onClick={() => onDel(id)}>
          <i className="삭제">
            <FaTrashAlt />
          </i>
        </button>
      </p>
    </li>
  );
};

export default CartItem;
