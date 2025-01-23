import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { postActions } from '../../store/modules/postSlice';

const PostFormCon = styled.form`
    margin-bottom: 15px;
    input {
        width: 800px;
        height: 50px;
        border: 1px solid #999;
        box-sizing: border-box;
        padding: 0 15px;
        background: #efefef;
        color: blue;
    }
`;

const PostForm = () => {
    const { text } = useSelector((state) => state.postR);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <PostFormCon onSubmit={onSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => dispatch(postActions.changeInput(e.target.value))}
            />
        </PostFormCon>
    );
};

export default PostForm;
