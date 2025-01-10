import { GalleryItemContainer } from './style';

const GalleryItem = ({ item }) => {
  const { webformatURL, user, likes, downloads, view, tags } = item;
  const tagList = tags.split(',');
  return (
    <GalleryItemContainer>
      <img src={webformatURL} alt="" />
      <h3>{user}</h3>
      <ul>
        <li>조회수 :{view}</li>
        <li>다운로드 :{downloads}</li>
        <li>좋아요 :{likes}</li>
      </ul>
      <p>
        {tagList.map((tag, idx) => (
          <span key={idx}>#{tag.trim()}</span>
        ))}
        {/* <span># 키워드</span>
        <span># 키워드</span>
        <span># 키워드</span> */}
      </p>
    </GalleryItemContainer>
  );
};

export default GalleryItem;
