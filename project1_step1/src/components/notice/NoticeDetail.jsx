import { useNavigate, useParams } from 'react-router-dom';
import { NoticeDetailWrap } from './style';
import { useSelector } from 'react-redux';

const NoticeDetail = () => {
    return (
        <NoticeDetailWrap>
            <div className="inner">
                <h2> 공지사항 </h2>
                <div className="con">
                    <h3>??번</h3>
                    <p className="txt">content </p>
                    <p className="date">date </p>
                </div>
                <button>목록으로</button>
            </div>
        </NoticeDetailWrap>
    );
};

export default NoticeDetail;
