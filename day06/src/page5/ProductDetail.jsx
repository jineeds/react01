import { useNavigate, useParams } from 'react-router-dom';
import data from './data';

const ProductDetail = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  //   1.데이터불러오기(data.js) 2. productID와 data의 id 비교해서 같은 객체 {}find
  const thisProduct = data.find((item) => item.id === Number(productID));
  const onGo = () => {
    navigate(`/Products`);
  };
  return (
    <div className="view">
      <div className="inner">
        <div className="item">
          <h1> {productID}</h1>
          <h2>가격: {thisProduct.price} 원</h2>
          <p>사진주소 : {thisProduct.photo} </p>
          <p>
            <img src={thisProduct.photo} alt="" width="450" />
          </p>
          <p>상품 설명: {thisProduct.description}</p>
          <button onClick={onGo}>제품목록</button>
        </div>
        <div className="box">상세 설명구조</div>
      </div>
    </div>
  );
};

export default ProductDetail;
