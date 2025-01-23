import GalleryItem from './GalleryItem';
import { GalleryListContainer } from './style';
import Masonry from 'react-masonry-css';

const GalleryList = () => {
    return (
        <GalleryListContainer>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {/* 출력 */}
                <GalleryItem />
            </Masonry>
        </GalleryListContainer>
    );
};

export default GalleryList;
