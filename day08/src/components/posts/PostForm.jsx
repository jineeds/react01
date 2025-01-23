import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <PostFormCon onSubmit={onSubmit}>
            <input type="text" />
        </PostFormCon>
    );
};

export default PostForm;
