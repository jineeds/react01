import { NoticeFormCom } from './style';

const NoticeForm = () => {
    return (
        <NoticeFormCom>
            <p>
                <label htmlFor="search" className="hide">
                    검색
                </label>
                <input type="text" name="" id="search" />
                <button>검색</button>
            </p>
            <p>
                <select>
                    <option value="">--- 정렬 --- </option>
                    <option value="date"> 최신작성일 </option>
                    <option value="id"> 번호 </option>
                    <option value="내용"> 내용 </option>
                </select>
            </p>
        </NoticeFormCom>
    );
};

export default NoticeForm;
