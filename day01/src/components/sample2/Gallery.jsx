import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import dataList from '../../assets/api/galleryData1';
import './style2.scss';
import { useState } from 'react';
import GalleryView from './GalleryView';
import Popup from './Popup';

const Gallery = () => {
  const [data, setData] = useState(dataList);
  const [current, setCurrent] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  //작은 이미지
  const onView = (id) => {
    setCurrent(data.find((item) => item.id === id));
    setData(data.map((item) => (item.id === id ? { ...item, isClass: true } : { ...item, isClass: false })));
  };
  //큰이미지 클릭시 처리
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen();
  };

  return (
    <>
      {isOpen && <Popup onClose={onClose} current={current} />}
      <div className="wrap">
        <div>
          <GalleryBig current={current} onOpen={onOpen} />
          <GalleryList data={data} onView={onView} />
          <p>
            {current.id}/{data.length}
          </p>
        </div>
        <GalleryView current={current} />
      </div>
    </>
  );
};

export default Gallery;
