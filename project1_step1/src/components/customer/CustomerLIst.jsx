import { CustomerLIstWrap } from './style';
import CustomerItem from './CustomerItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CustomerLIst = () => {
    c;

    return (
        <CustomerLIstWrap>
            <table className="customerTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="name" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <CustomerItem />
                </tbody>
            </table>
            <p>
                <button>글 작성 </button>
            </p>
        </CustomerLIstWrap>
    );
};

export default CustomerLIst;
