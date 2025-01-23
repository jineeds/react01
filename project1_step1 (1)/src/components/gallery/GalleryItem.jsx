import { GalleryItemContainer } from './style';

const GalleryItem = () => {
    return (
        <GalleryItemContainer>
            <img src="" alt="" />
            <h3> xx</h3>
            <ul>
                <li>조회수 : </li>
                <li>다운로드 : </li>
                <li>좋아요 : </li>
            </ul>
            <p>
                <span># xx</span>
            </p>
        </GalleryItemContainer>
    );
};

export default GalleryItem;
