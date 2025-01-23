const PostItem = ({ post }) => {
    const { objectID, title } = post;
    return (
        <li>
            {objectID} / {title}
        </li>
    );
};

export default PostItem;
