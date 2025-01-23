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
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPost } from '../../store/modules/postSlice';
const PostList = () => {
    const { posts } = useSelector((state) => state.postR);
    const { text } = useSelector((state) => state.postR);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(text));
    }, [text]);

    return (
        <PostUl>
            {posts.map((post) => (
                <PostItem key={post.objectID} post={post} />
            ))}
        </PostUl>
    );
};

export default PostList;
