import { useDispatch, useSelector } from 'react-redux';
import { CustomerAddWrap } from './style';
import { useNavigate } from 'react-router-dom';

const CustomerEdit = () => {
    return (
        <CustomerAddWrap>
            <div className="inner">
                <h2> 고객문의수정 </h2>
                <form className="customer-add" onSubmit={onSubmit}>
                    <p>
                        <input type="text" placeholder="제목" name="" />
                    </p>
                    <p>
                        <input type="text" placeholder="작성자" name="" />
                    </p>
                    <p>
                        <textarea cols="100" rows="10" placeholder="문의하기" name=""></textarea>
                    </p>
                    <p>
                        <button>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button>취소하기</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;
