import { NoticeListWrap } from './style';
import NoticeItem from './NoticeItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const NoticeList = () => {
    return (
        <NoticeListWrap>
            <table className="noticeTable">
                <caption>게시판</caption>
                <colgroup>
                    <col className="num" />
                    <col className="title" />
                    <col className="date" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>내용</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <NoticeItem />
                </tbody>
            </table>
        </NoticeListWrap>
    );
};

export default NoticeList;
