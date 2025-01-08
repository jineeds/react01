import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import dataList from '../assets/api/galleryData';
import './style2.scss';
import { useState } from 'react';
import GalleryView from './sample4/GalleryView';

const Gallery = () => {
  const [data, setData] = useState(dataList);
  const [current, setCurrent] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  // 이벤트는 커런트 값이 있는 곳에서 설정함
  const onView = (id) => {
    // 이미지 변경
    // setCurrent(data[id]);
    setCurrent(data.find((item) => item.id === id));
    // const num = data.findIndex(item => item.id===id)
    // 수정 부분 참고 isClass => true / false
    setData(data.map((item) => (item.id === id ? { ...item, isClass: true } : { ...item, isClass: false })));
  };

  return (
    <>
      <div className="wrap">
        <div>
          <GalleryBig current={current} />
          <GalleryList data={data} onView={onView} />
          <p>현재/{data.length}</p>
        </div>
        <GalleryView />
      </div>
    </>
  );
};

export default Gallery;
