import { useNavigate, useParams } from 'react-router-dom';
import { CustomerDetailWrap } from './style';
import { useDispatch, useSelector } from 'react-redux';

const CustomerDetail = () => {
    return (
        <CustomerDetailWrap>
            <div className="inner">
                <h2> 문의 글 </h2>
                <div className="con">
                    <h3>1번 title</h3>

                    <p className="name">name </p>
                    <p className="txt"> content </p>
                    <p className="date"> date </p>
                </div>

                <p>
                    <button>목록으로</button>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                </p>
            </div>
        </CustomerDetailWrap>
    );
};

export default CustomerDetail;
