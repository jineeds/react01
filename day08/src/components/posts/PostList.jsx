import styled from 'styled-components';
import PostItem from './PostItem';

const PostUl = styled.ul`
    border: 1px solid #999;
    padding: 20px;
    li {
        line-height: 40px;
        border-bottom: 1px solid #dcdcdc;
    }
`;

const PostList = () => {
    return (
        <PostUl>
            <PostItem />
        </PostUl>
    );
};

export default PostList;
