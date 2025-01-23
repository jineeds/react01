import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './style';

const Pagination = () => {
    return (
        <PaginationWrap>
            <div>
                <button>{`<<`}</button>
                <button>{`<`}</button>

                <button className="on">1</button>

                <button>{`>`}</button>
                <button>{`>>`}</button>
            </div>
        </PaginationWrap>
    );
};

export default Pagination;
