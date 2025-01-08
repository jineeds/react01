import './style.scss';
import dataList from '../assets/api/posterData';
import { useState } from 'react';
import MovieItem from './MovieItem';

const Moive = () => {
  const [data, setData] = useState(dataList);

  // 삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div className="wrap">
      {/* map */}
      {data.map((item = <MovieItem key={item.id} item={item} onDel={onDel} />))}
      {/* 여기서 문제!!!!! */}
    </div>
  );
};

export default Moive;
