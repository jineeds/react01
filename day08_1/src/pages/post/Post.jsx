import styled from 'styled-components';
import PostForm from '../../components/posts/PostForm';
import PostList from '../../components/posts/PostList';
const PostsCon = styled.div``;

const Post = () => {
    return (
        <PostsCon>
            <div className="inner">
                <h2>일정관리</h2>
                <PostForm />
                <PostList />
            </div>
        </PostsCon>
    );
};

export default Post;
