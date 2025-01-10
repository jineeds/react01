import { GalleryContainer } from './style';
// import axios from 'axios';
import GalleryForm from '../galleryForm/GalleryForm';
import GalleryList from '../galleryList/GalleryList';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [text, setText] = useState('dog');
  const API_KEY = '48123301-4d7f74d6d64247080ba8c5b35';
  //   https://pixabay.com/api/?key=48123301-4d7f74d6d64247080ba8c5b35&q=yellow+flowers&image_type=photo

  // https://pixabay.com/api/?key=사용자키&q=검색키워드&image_type=photo

  // 비동기, 시간, PROPS 업데이틑 = useEffect
  //   useEffect(() => {}, []);
  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.hits);
        setLoading(false);
        setError([null]);
      })
      .catch((e) => {
        setData([]);
        setLoading(true);
        // setError('주소를 찾을 수 없습니다.');
        setError(e.message);
      });
  }, [text]);
  //   [[갤러리폼에도 onsearch(text 동일하게 적용)]]

  const onSearch = (text) => setText(text);
  //   onsort 갤러리폼도 받아주고 셀렉트에 changeinput 적용하고 아래 내용 적용하면 탭에서 원하는 정렬대로 조회가 됨.
  const onSort = (value) => {
    if (value !== '') {
      setData([...data].sort((a, b) => (a[value] > b[value] ? 1 : -1)));
    }
  };
  //   if(data.length === 0 ) return <div>이미지를 불러올 수 없음</div> 에러가 발생했을때 ? 화면에 뭔가 보여줄 떄 이런식으로도 사용 가능

  return (
    <>
      <GalleryContainer>
        <h2> 픽사베이 API 갤러리 </h2>
        <GalleryForm onSearch={onSearch} onSort={onSort} />
        {loading && data.length === 0 && <h2> no image </h2>}
        {!loading && data.length === 0 ? <h2>Loading....</h2> : <GalleryList data={data} />}
        {error ? error : null}
        {/* <GalleryList /> */}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
